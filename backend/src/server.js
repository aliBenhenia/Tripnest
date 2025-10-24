const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const planner = require('./routes/planner');
const stops = require('./routes/stops');
const saves = require('./routes/saves');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
import errHandler from './middleware/errHandler';
// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '..', '.env') });


// Hardcoded port in case .env is not loaded correctly
const PORT = 3001;
console.log(`Using port: ${PORT}`);

const app = express();

// Middleware
app.use(cors({
  // Allow requests from any origin
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app,use(errHandler)


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


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/planner', planner);
app.use('/api/stops', stops);
app.use('/api/saves', saves); // Use saves routes


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
