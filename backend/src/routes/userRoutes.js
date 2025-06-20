const express = require('express');
const userController = require('../controllers/userController');
const { protect, restrictTo, rateLimiter } = require('../middleware/authMiddleware');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Make sure uploads folder exists
const uploadPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

const storage = multer.diskStorage({
  destination: uploadPath,
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

// Apply rate limiting
const userRateLimiter = rateLimiter(100, 15 * 60 * 1000); // 100 requests per 15 minutes

// All routes are protected
router.use(protect);

// Profile routes
router.get('/profile', userController.getProfile);
router.get('/places', userController.getPlaces);
router.patch('/update', userRateLimiter, upload.single('avatar'), userController.updateProfile);
router.patch('/password', userRateLimiter, userController.updatePassword);
router.delete('/account', userRateLimiter, userController.deleteAccount);

// Admin only routes
router.use(restrictTo('admin'));
// Add admin specific routes here if needed

module.exports = router;