const express = require('express');
const router = express.Router();
const {
  getActivities,
  getActivityById,
  createActivity,
  updateActivity,
  deleteActivity
} = require('../controllers/activityController');

// @route   GET /api/activities
// @desc    Get all activities
// @access  Public
router.get('/', getActivities);

// @route   GET /api/activities/:id
// @desc    Get activity by ID
// @access  Public
router.get('/:id', getActivityById);

// @route   POST /api/activities
// @desc    Create new activity
// @access  Private/Admin
router.post('/', createActivity);

// @route   PUT /api/activities/:id
// @desc    Update activity
// @access  Private/Admin
router.put('/:id', updateActivity);

// @route   DELETE /api/activities/:id
// @desc    Delete activity
// @access  Private/Admin
router.delete('/:id', deleteActivity);

module.exports = router; 