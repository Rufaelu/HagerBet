import express from 'express';
import Review from '../models/Review.js';

const router = express.Router();

// Create a new review
router.post('/', async (req, res) => {
  try {
    const { name, rating, message } = req.body;

    if (!name || !rating || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ success: false, message: 'Rating must be between 1 and 5' });
    }

    const newReview = new Review({
      name,
      rating,
      message,
    });

    await newReview.save();
    res.status(201).json({ success: true, message: 'Review created successfully', data: newReview });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating review', error: error.message });
  }
});

// Get all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json({ success: true, data: reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching reviews', error: error.message });
  }
});

// Get a single review by ID
router.get('/:id', async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ success: false, message: 'Review not found' });
    }
    res.json({ success: true, data: review });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching review', error: error.message });
  }
});

// Update a review
router.put('/:id', async (req, res) => {
  try {
    const { name, rating, message } = req.body;

    if (rating && (rating < 1 || rating > 5)) {
      return res.status(400).json({ success: false, message: 'Rating must be between 1 and 5' });
    }

    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { name, rating, message },
      { new: true, runValidators: true }
    );

    if (!review) {
      return res.status(404).json({ success: false, message: 'Review not found' });
    }

    res.json({ success: true, message: 'Review updated successfully', data: review });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating review', error: error.message });
  }
});

// Delete a review
router.delete('/:id', async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);

    if (!review) {
      return res.status(404).json({ success: false, message: 'Review not found' });
    }

    res.json({ success: true, message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting review', error: error.message });
  }
});

export default router;
