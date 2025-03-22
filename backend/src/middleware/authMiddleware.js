const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  try {
    // Check if token exists
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    console.log('Auth middleware: Token present:', !!token);

    if (!token) {
      return res.status(401).json({
        status: 'fail',
        message: 'Not authenticated. Please log in to access this resource.'
      });
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key-for-development');
      console.log('Auth middleware: Token verified for user ID:', decoded.id);

      // Check if user still exists
      const user = await User.findById(decoded.id);
      if (!user) {
        console.log('Auth middleware: User not found with ID:', decoded.id);
        return res.status(401).json({
          status: 'fail',
          message: 'The user for this token no longer exists.'
        });
      }

      // Set user on request
      req.user = user;
      console.log('Auth middleware: Authentication successful for user:', user.email);
      next();
    } catch (jwtError) {
      console.error('Auth middleware: JWT verification error:', jwtError.message);
      
      if (jwtError.name === 'JsonWebTokenError') {
        return res.status(401).json({
          status: 'fail',
          message: 'Invalid token. Please log in again.'
        });
      } else if (jwtError.name === 'TokenExpiredError') {
        return res.status(401).json({
          status: 'fail',
          message: 'Your token has expired. Please log in again.'
        });
      }
      
      return res.status(401).json({
        status: 'fail',
        message: 'Authentication failed. Please log in again.'
      });
    }
  } catch (error) {
    console.error('Auth middleware: Server error:', error);
    return res.status(500).json({
      status: 'error',
      message: 'Server error during authentication.'
    });
  }
};

module.exports = { protect }; 