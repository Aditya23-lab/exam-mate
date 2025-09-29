

const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const requireAuth = require('../middleware/authMiddleware');
const File = require('../models/fileModel');
const stringSimilarity = require('string-similarity');
const upload = require('../config/multer');

// POST /api/files/upload
router.post('/upload', requireAuth, upload.single('file'), async (req, res) => {
  const {
    subject, examType, userType,
    branch, semester, college,
    school, classLevel, term,
  } = req.body;

  if (!req.file || !subject || !examType || !userType) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const fileData = {
    originalName: req.file.originalname,
    storedName: req.file.filename,
    subject,
    examType,
    userType,
    uploader: req.user.id,
  };

  if (userType === "college") {
    if (!branch || !semester || !college) {
      return res.status(400).json({ message: 'Missing college fields' });
    }
    fileData.branch = branch;
    fileData.semester = semester;
    fileData.college = college;
  // } else if (userType === "school") {
  //   if (!school || !classLevel || !term) {
  //     return res.status(400).json({ message: 'Missing school fields' });
  //   }
  //   fileData.school = school;
  //   fileData.classLevel = classLevel;
  //   fileData.term = term;
  // }
  } else if (userType === "school") {
  if (!school || !classLevel) {
    return res.status(400).json({ message: 'Missing school fields' });
  }
  fileData.school = school;
  fileData.classLevel = classLevel;
}


  try {
    const newFile = new File(fileData);
    await newFile.save();
    res.status(200).json({ message: '✅ File uploaded successfully', file: newFile });
  } catch (err) {
    res.status(500).json({ message: 'Error saving file metadata', error: err.message });
  }
});

// 📄 Get all files with basic filtering (no grouping)
router.get('/', async (req, res) => {
  try {
    const {
      userType, branch, semester, subject,
      college, examType, school, classLevel, term,
    } = req.query;

    const filter = {};
    if (userType) filter.userType = userType;
    if (branch) filter.branch = branch;
    if (semester) filter.semester = semester;
    if (college) filter.college = college;
    if (examType) filter.examType = examType;
    if (school) filter.school = school;
    if (classLevel) filter.classLevel = classLevel;
    if (term) filter.term = term;
    if (subject) {
      filter.subject = { $regex: subject, $options: 'i' }; // case-insensitive match
    }

    const files = await File.find(filter).sort({ uploadDate: -1 }).populate('uploader', 'name email');
    res.status(200).json(files);
  } catch (err) {
    console.error('❌ Error fetching files:', err);
    res.status(500).json({ message: 'Failed to fetch files', error: err.message });
  }
});

// 📥 Download file by filename
router.get('/download/:filename', (req, res) => {
  const filePath = path.join(__dirname, '..', 'uploads', req.params.filename);
  if (!fs.existsSync(filePath)) return res.status(404).json({ message: 'File not found' });
  res.download(filePath);
});

// 👤 My uploads
router.get('/my', requireAuth, async (req, res) => {
  try {
    const files = await File.find({ uploader: req.user.id }).sort({ uploadDate: -1 });
    res.status(200).json(files);
  } catch {
    res.status(500).json({ message: 'Failed to fetch your uploads' });
  }
});

// 🏆 Upload leaderboard
router.get('/leaderboard', async (req, res) => {
  try {
    const topUploaders = await File.aggregate([
      { $group: { _id: '$uploader', uploadCount: { $sum: 1 } } },
      { $sort: { uploadCount: -1 } },
      { $limit: 10 },
      {
        $lookup: {
          from: 'users',
          localField: '_id',
          foreignField: '_id',
          as: 'uploaderDetails',
        },
      },
      { $unwind: '$uploaderDetails' },
      {
        $project: {
          _id: 0,
          name: '$uploaderDetails.name',
          email: '$uploaderDetails.email',
          uploadCount: 1,
        },
      },
    ]);
    res.status(200).json(topUploaders);
  } catch (err) {
    res.status(500).json({ message: 'Leaderboard error', error: err.message });
  }
});

// 🔍 Smart Autocomplete
router.get('/suggestions', async (req, res) => {
  try {
    const { field, query } = req.query;
    const allowedFields = ['subject', 'college', 'school', 'branch'];
    if (!allowedFields.includes(field) || !query)
      return res.status(400).json({ message: 'Invalid field or query' });

    const suggestions = await File.distinct(field, {
      [field]: { $regex: query, $options: 'i' },
    });

    suggestions.sort((a, b) => a.localeCompare(b));
    res.json(suggestions);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// 👁️ View File by ID
router.get('/:id', async (req, res) => {
  try {
    const file = await File.findById(req.params.id).populate('uploader', 'name email');
    if (!file) return res.status(404).json({ message: 'File not found' });
    res.status(200).json(file);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching file by ID', error: err.message });
  }
});

// ❌ Delete File
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).json({ message: 'File not found' });

    if (file.uploader.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to delete this file' });
    }

    const filePath = path.join(__dirname, '..', 'uploads', file.storedName);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    await file.deleteOne();
    res.status(200).json({ message: 'File deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete file', error: err.message });
  }
});

module.exports = router;
