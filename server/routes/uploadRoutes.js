


// // 
// const express = require('express');
// const router = express.Router();
// const requireAuth = require('../middleware/authMiddleware');
// const upload = require('../config/multer');
// const File = require('../models/fileModel');

// router.post('/upload', requireAuth, upload.single('file'), async (req, res) => {
//   const { branch, semester, subject, college } = req.body;

//   if (!req.file || !branch || !semester || !subject || !college) {
//     return res.status(400).json({ message: 'Missing required fields' });
//   }

//   try {
//     const newFile = new File({
//       originalName: req.file.originalname,
//       storedName: req.file.filename,
//       branch,
//       semester,
//       subject,
//       college, // ✅ added from manual input
//       uploader: req.user.id
//     });

//     await newFile.save();

//     res.status(200).json({
//       message: 'File uploaded and metadata saved successfully',
//       file: newFile
//     });
//   } catch (err) {
//     res.status(500).json({ message: 'Error saving file metadata', error: err.message });
//   }
// });

// module.exports = router;
// this is my working code 

// const express = require('express');
// const router = express.Router();
// const upload = require('../config/multer');
// const requireAuth = require('../middleware/authMiddleware');
// const File = require('../models/fileModel');

// router.post('/upload', requireAuth, upload.single('file'), async (req, res) => {
//   try {
//     const file = new File({
//       filename: req.file.filename,
//       originalname: req.file.originalname,
//       subject: req.body.subject,
//       branch: req.body.branch,
//       semester: req.body.semester,
//       examType: req.body.examType,
//       college: req.body.college,
//       uploadedBy: req.user.id
//     });
//     await file.save();
//     res.status(201).json({ message: 'File uploaded successfully', file });
//   } catch (err) {
//     console.error('Upload error:', err.message);
//     res.status(500).json({ message: 'Failed to upload file' });
//   }
// });

// module.exports = router;

// working

