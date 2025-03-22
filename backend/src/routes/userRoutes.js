const express = require('express');
const userController = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const { uploadAvatar } = require('../middleware/uploadMiddleware');

const router = express.Router();

// All routes below are protected
router.use(protect);

// Profile routes
router.get('/profile', userController.getProfile);
router.patch('/profile', uploadAvatar, userController.updateProfile);
router.patch('/password', userController.updatePassword);

module.exports = router; 