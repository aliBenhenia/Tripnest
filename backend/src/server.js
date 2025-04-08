const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '..', '.env') });

// Log all environment variables for debugging
console.log('Environment variables:');
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`PORT from env: ${process.env.PORT}`);

// Hardcoded port in case .env is not loaded correctly
const PORT = 3001;
console.log(`Using port: ${PORT}`);

const app = express();

// Middleware
app.use(cors({
  // Allow requests from any origin
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Set up multer storage configuration
const storage = multer.diskStorage({
  /**
   * Specify the destination directory for uploaded files.
   * @param {express.Request} req - The Express request object.
   * @param {multer.File} file - The multer file object.
   * @param {function(Error, string)} cb - The callback function.
   * @returns {void}
   */
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, '..', 'uploads');
    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, 'avatar-' + uniqueSuffix + ext);
  }
});

// File filter for images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new Error('Not an image! Please upload only images.'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'routes', 'uploads')));
app.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname, 'routes', 'uploads', 'aya.png'));
});
// In-memory user storage for when MongoDB is unavailable
let inMemoryUsers = [];
let isMongoDBConnected = false;

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Fallback auth routes when MongoDB is not available
app.post('/api/local-auth/signup', async (req, res) => {
  try {
    if (isMongoDBConnected) {
      return res.status(400).json({
        status: 'fail',
        message: 'MongoDB is connected. Use the regular auth endpoints.'
      });
    }

    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = inMemoryUsers.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({
        status: 'fail',
        message: 'User already exists with this email'
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password: hashedPassword,
      avatar: null,
      createdAt: new Date()
    };

    inMemoryUsers.push(newUser);

    // Create token
    const token = jwt.sign(
      { id: newUser.id },
      process.env.JWT_SECRET || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3NDQwMzc2NjIsImV4cCI6MTc3NTU3MzY3MSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.SjmVHA--kP2v-rc-_om87bJetUu0FAcccu5S2CCWNMc',
      { expiresIn: process.env.JWT_EXPIRES_IN || '30d' }
    );

    // Remove password from response
    const userResponse = { ...newUser };
    delete userResponse.password;

    res.status(201).json({
      status: 'success',
      token,
      data: {
        user: userResponse
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
});

app.post('/api/local-auth/signin', async (req, res) => {
  try {
    if (isMongoDBConnected) {
      return res.status(400).json({
        status: 'fail',
        message: 'MongoDB is connected. Use the regular auth endpoints.'
      });
    }

    const { email, password } = req.body;

    // Check if email and password exist
    if (!email || !password) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide email and password'
      });
    }

    // Find user
    const user = inMemoryUsers.find(user => user.email === email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        status: 'fail',
        message: 'Incorrect email or password'
      });
    }

    // Create token
    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3NDQwMzc2NjIsImV4cCI6MTc3NTU3MzY3MSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.SjmVHA--kP2v-rc-_om87bJetUu0FAcccu5S2CCWNMc',
      { expiresIn: process.env.JWT_EXPIRES_IN || '30d' }
    );

    // Remove password from response
    const userResponse = { ...user };
    delete userResponse.password;

    res.status(200).json({
      status: 'success',
      token,
      data: {
        user: userResponse
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
});

// In-memory user profile routes
app.get('/api/local-users/profile', async (req, res) => {
  try {
    if (isMongoDBConnected) {
      return res.status(400).json({
        status: 'fail',
        message: 'MongoDB is connected. Use the regular user endpoints.'
      });
    }

    // Get token from header
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    console.log('Profile request received. Token present:', !!token);

    if (!token) {
      return res.status(401).json({
        status: 'fail',
        message: 'Not authenticated. Please log in to access this resource.'
      });
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3NDQwMzc2NjIsImV4cCI6MTc3NTU3MzY3MSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.SjmVHA--kP2v-rc-_om87bJetUu0FAcccu5S2CCWNMc');
      console.log('Token verified for user ID:', decoded.id);

      // Find user
      const user = inMemoryUsers.find(u => u.id === decoded.id);
      if (!user) {
        console.log('User not found with ID:', decoded.id);
        console.log('Available users:', inMemoryUsers.map(u => u.id));
        return res.status(404).json({
          status: 'fail',
          message: 'User not found'
        });
      }

      // Remove password from response
      const userResponse = { ...user };
      delete userResponse.password;

      console.log('Profile retrieved successfully');
      res.status(200).json({
        status: 'success',
        data: {
          user: userResponse
        }
      });
    } catch (jwtError) {
      console.error('JWT verification error:', jwtError.message);
      return res.status(401).json({
        status: 'fail',
        message: 'Invalid or expired token. Please log in again.'
      });
    }
  } catch (err) {
    console.error('Server error in profile route:', err);
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
});

// ...all your imports and previous code...

app.patch('/api/local-users/profile', upload.single('avatar'), async (req, res) => {
  try {
    if (isMongoDBConnected) {
      return res.status(400).json({
        status: 'fail',
        message: 'MongoDB is connected. Use the regular user endpoints.'
      });
    }

    // Get token from header
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        status: 'fail',
        message: 'Not authenticated. Please log in.'
      });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_jwt_secret');
    } catch (err) {
      return res.status(401).json({
        status: 'fail',
        message: 'Invalid or expired token.'
      });
    }

    const userIndex = inMemoryUsers.findIndex(u => u.id === decoded.id);
    if (userIndex === -1) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found'
      });
    }

    const user = inMemoryUsers[userIndex];

    // Update fields if provided
    const { name, email } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;

    // Handle avatar upload
    if (req.file) {
      // Delete old avatar if exists
      if (user.avatar && fs.existsSync(path.join(__dirname, '..', 'uploads', user.avatar))) {
        fs.unlinkSync(path.join(__dirname, '..', 'uploads', user.avatar));
      }

      user.avatar = req.file.filename;
    }

    inMemoryUsers[userIndex] = user;

    const userResponse = { ...user };
    delete userResponse.password;

    res.status(200).json({
      status: 'success',
      data: {
        user: userResponse
      }
    });
  } catch (err) {
    console.error('Error updating profile:', err);
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
});

// MongoDB connection check (async)
const startServer = async () => {
  try {
    await connectDB();
    isMongoDBConnected = true;
    console.log('MongoDB connected');
  } catch (err) {
    isMongoDBConnected = false;
    console.log('MongoDB connection failed, switching to in-memory mode');
  }

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();
