const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/authMiddleware');
const Feedback = require('../models/feedbackModel');

// POST: Submit feedback
router.post('/:fileId', requireAuth, async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const feedback = new Feedback({
      file: req.params.fileId,
      user: req.user.id,
      rating,
      comment
    });

    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted', feedback });
  } catch (err) {
    res.status(500).json({ message: 'Feedback failed', error: err.message });
  }
});

// GET: Get feedback for a file
router.get('/:fileId', async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ file: req.params.fileId })
      .populate('user', 'name email')
      .sort({ createdAt: -1 });

    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch feedback', error: err.message });
  }
});

module.exports = router;
