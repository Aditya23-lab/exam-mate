const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  file: { type: mongoose.Schema.Types.ObjectId, ref: 'File', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, maxlength: 300 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
