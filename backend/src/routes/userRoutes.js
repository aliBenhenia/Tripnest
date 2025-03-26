const express = require('express');
const userController = require('../controllers/userController');
const { protect, restrictTo, rateLimiter } = require('../middleware/authMiddleware');
const router = express.Router();

// Apply rate limiting
const userRateLimiter = rateLimiter(100, 15 * 60 * 1000); // 100 requests per 15 minutes

// All routes are protected
router.use(protect);

// Profile routes
router.get('/profile', userController.getProfile);
router.patch('/profile', userRateLimiter, userController.updateProfile);
router.patch('/password', userRateLimiter, userController.updatePassword);
router.delete('/account', userRateLimiter, userController.deleteAccount);

// Admin only routes
router.use(restrictTo('admin'));
// Add admin specific routes here if needed

module.exports = router;