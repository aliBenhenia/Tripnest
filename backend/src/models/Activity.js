const mongoose = require('mongoose');

/**
 * Activity Schema for MongoDB
 */
const ActivitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Activity name is required'],
      trim: true
    },
    type: {
      type: String,
      required: [true, 'Activity type is required'],
      trim: true
    },
    description: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      required: [true, 'Activity image URL is required']
    },
    location: {
      type: String,
      required: [true, 'Activity location is required']
    },
    cityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'City',
      required: [true, 'City ID is required']
    },
    price: {
      type: Number,
      default: 0
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    reviews: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Activity', ActivitySchema); 