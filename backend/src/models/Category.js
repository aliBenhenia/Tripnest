const mongoose = require('mongoose');

/**
 * Category Schema for MongoDB
 */
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
      trim: true,
      unique: true
    },
    icon: {
      type: String,
      required: [true, 'Category icon is required']
    },
    description: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Category', CategorySchema); 