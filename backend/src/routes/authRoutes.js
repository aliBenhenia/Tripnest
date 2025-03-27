const express = require('express');
const authController = require('../controllers/authController');
const { protect, rateLimiter } = require('../middleware/authMiddleware');

const router = express.Router();

// Apply rate limiting to auth routes
const authRateLimiter = rateLimiter(100, 15 * 60 * 1000); // 100 requests per 15 minutes

// Public routes
router.post('/register', authRateLimiter, authController.register);
router.post('/login', authRateLimiter, authController.login);
router.post('/refresh-token', authRateLimiter, authController.refreshToken);

// Protected routes
// router.use(protect); // Apply authentication middleware to all routes below
router.get('/me', authController.getCurrentUser);
router.post('/logout', authController.logout);

module.exports = router;