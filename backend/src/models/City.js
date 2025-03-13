const mongoose = require('mongoose');

/**
 * City Schema for MongoDB
 */
const CitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'City name is required'],
      trim: true
    },
    slug: {
      type: String,
      required: [true, 'City slug is required'],
      unique: true,
      trim: true,
      lowercase: true
    },
    description: {
      type: String,
      required: [true, 'City description is required']
    },
    imageUrl: {
      type: String,
      required: [true, 'City image URL is required']
    },
    imageUrl2: {
      type: String,
      default: ''
    },
    properties: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('City', CitySchema); 