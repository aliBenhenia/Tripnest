const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Set port from environment or default to 5000
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Morocco Travel API' });
});

// API Routes
app.use('/api/cities', require('./api/routes/cityRoutes'));
app.use('/api/activities', require('./api/routes/activityRoutes'));
app.use('/api/categories', require('./api/routes/categoryRoutes'));
// app.use('/api/auth', require('./api/routes/authRoutes'));

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// For testing
module.exports = app;
