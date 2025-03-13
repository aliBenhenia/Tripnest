const express = require('express');
const router = express.Router();
const {
  getCities,
  getCityBySlug,
  createCity,
  updateCity,
  deleteCity
} = require('../controllers/cityController');

// @route   GET /api/cities
// @desc    Get all cities
// @access  Public
router.get('/', getCities);

// @route   GET /api/cities/:slug
// @desc    Get city by slug
// @access  Public
router.get('/:slug', getCityBySlug);

// @route   POST /api/cities
// @desc    Create new city
// @access  Private/Admin
router.post('/', createCity);

// @route   PUT /api/cities/:id
// @desc    Update city
// @access  Private/Admin
router.put('/:id', updateCity);

// @route   DELETE /api/cities/:id
// @desc    Delete city
// @access  Private/Admin
router.delete('/:id', deleteCity);

module.exports = router; 