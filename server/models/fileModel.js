



const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  originalName: { type: String, required: true },
  storedName: { type: String, required: true },
  subject: { type: String, required: true },
  examType: { type: String }, // ✅ Mid, Final, etc.
  userType: { type: String, enum: ['college', 'school'], required: true },

  // College-specific
  branch: { type: String },
  semester: { type: String },
  college: { type: String },

  // School-specific
  school: { type: String },
  classLevel: { type: String },
  term: { type: String },

  uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  uploadDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('File', fileSchema);

