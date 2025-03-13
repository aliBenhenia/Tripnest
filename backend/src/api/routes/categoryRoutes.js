const express = require('express');
const router = express.Router();
const {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/categoryController');

// @route   GET /api/categories
// @desc    Get all categories
// @access  Public
router.get('/', getCategories);

// @route   GET /api/categories/:id
// @desc    Get category by ID
// @access  Public
router.get('/:id', getCategoryById);

// @route   POST /api/categories
// @desc    Create new category
// @access  Private/Admin
router.post('/', createCategory);

// @route   PUT /api/categories/:id
// @desc    Update category
// @access  Private/Admin
router.put('/:id', updateCategory);

// @route   DELETE /api/categories/:id
// @desc    Delete category
// @access  Private/Admin
router.delete('/:id', deleteCategory);

module.exports = router; 