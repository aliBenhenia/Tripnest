// saves.js
const express = require('express');
const mongoose = require('mongoose');
const { protect } = require('../middleware/authMiddleware');

// =======================
// Schema for saved items
// =======================
const saveSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  activityId: { type: String, required: true },
  name: String,
  description: String,
  imageUrl: String,
  type: String,
  latitude: Number,
  longitude: Number,
  createdAt: { type: Date, default: Date.now }
});

// ✅ Unique combination of userId + activityId
saveSchema.index({activityId: 1 }, { unique: true });

// Prevent OverwriteModelError
const SaveItem = mongoose.models.SaveItem || mongoose.model('SaveItem', saveSchema);

// =======================
// Router
// =======================
const saveRouter = express.Router();
saveRouter.use(protect); // Protect all routes

// =======================
// Get all saved items for authenticated user
// =======================
saveRouter.get('/', async (req, res) => {
  try {
    const saves = await SaveItem.find({ userId: req.user.id })
    res.json(saves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// =======================
// Save an item (No duplicates allowed)
// =======================
saveRouter.post('/', async (req, res) => {
  try {
    const { activityId } = req.body;

    // Soft check to prevent hitting DB error unnecessarily
    const existingSave = await SaveItem.findOne({
      userId: req.user.id,
      activityId
    });

    if (existingSave) {
      return res.status(400).json({ message: 'Item already saved' });
    }

    const saveItem = new SaveItem({
      ...req.body,
      userId: req.user.id
    });

    const savedItem = await saveItem.save();
    res.status(201).json(savedItem);

  } catch (error) {
    // Handle DB-level duplicate error
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Item already saved' });
    }
    res.status(400).json({ message: error.message });
  }
});

// =======================
// Delete a saved item
// =======================
saveRouter.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await SaveItem.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found or unauthorized' });
    }

    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// =======================
// Update a saved item
// =======================
saveRouter.put('/:id', async (req, res) => {
  try {
    const updatedItem = await SaveItem.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found or unauthorized' });
    }

    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = saveRouter;
