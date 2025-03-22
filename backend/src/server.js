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
app.use(cors());
app.use(express.json());

// Set up multer storage configuration
const storage = multer.diskStorage({
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
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

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
      process.env.JWT_SECRET || 'your-secret-key-for-development',
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
      process.env.JWT_SECRET || 'your-secret-key-for-development',
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
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key-for-development');
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

    console.log('Profile update request received. Token present:', !!token);
    console.log('Request body:', req.body);
    console.log('File uploaded:', req.file ? req.file.filename : 'None');

    if (!token) {
      return res.status(401).json({
        status: 'fail',
        message: 'Not authenticated. Please log in to access this resource.'
      });
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key-for-development');
      console.log('Token verified for user ID:', decoded.id);

      // Find user
      const userIndex = inMemoryUsers.findIndex(u => u.id === decoded.id);
      if (userIndex === -1) {
        console.log('User not found with ID:', decoded.id);
        console.log('Available users:', inMemoryUsers.map(u => u.id));
        return res.status(404).json({
          status: 'fail',
          message: 'User not found'
        });
      }

      // Update user data
      const { name, email } = req.body;
      
      if (name) inMemoryUsers[userIndex].name = name;
      if (email) inMemoryUsers[userIndex].email = email;

      // Handle avatar upload
      if (req.file) {
        // If user already has an avatar that's not the default, delete it
        if (inMemoryUsers[userIndex].avatar) {
          try {
            // Extract the filename from the avatar path
            const avatarPath = inMemoryUsers[userIndex].avatar;
            const uploadPath = path.join(__dirname, '..', 'uploads');
            const filename = avatarPath.split('/').pop();
            const oldAvatarPath = path.join(uploadPath, filename);
            
            console.log('Attempting to delete old avatar:', oldAvatarPath);
            if (fs.existsSync(oldAvatarPath)) {
              fs.unlinkSync(oldAvatarPath);
              console.log('Old avatar deleted successfully');
            } else {
              console.log('Old avatar file not found');
            }
          } catch (err) {
            console.error('Error deleting old avatar:', err);
          }
        }

        // Update user's avatar field
        inMemoryUsers[userIndex].avatar = `/uploads/${req.file.filename}`;
        console.log('Avatar updated to:', inMemoryUsers[userIndex].avatar);
      }

      // Remove password from response
      const userResponse = { ...inMemoryUsers[userIndex] };
      delete userResponse.password;

      console.log('Profile updated successfully');
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
    console.error('Server error in profile update route:', err);
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
});

// Test route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to Travila API',
    mongoDBStatus: isMongoDBConnected ? 'Connected' : 'Not Connected',
    authEndpoints: isMongoDBConnected 
      ? ['/api/auth/signup', '/api/auth/signin'] 
      : ['/api/local-auth/signup', '/api/local-auth/signin'],
    userEndpoints: isMongoDBConnected
      ? ['/api/users/profile'] 
      : ['/api/local-users/profile']
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : {}
  });
});

// Connect to database and start server
const startServer = async () => {
  try {
    await connectDB();
    isMongoDBConnected = true;
    console.log('MongoDB connection successful');
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    console.log('WARNING: Server starting with in-memory storage. Data will be lost when server restarts.');
    isMongoDBConnected = false;
  }

  // Start server whether MongoDB connects or not
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
    if (!isMongoDBConnected) {
      console.log(`Since MongoDB is not connected, use these endpoints instead:`);
      console.log(`- POST /api/local-auth/signup`);
      console.log(`- POST /api/local-auth/signin`);
    }
  });
};

startServer(); 