// import cors from "cors";
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const fileRoutes = require('./routes/fileRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

dotenv.config();
connectDB();

const app = express();
// app.use(cors());

app.use(
  cors({
    origin: ["https://exam-mate-five.vercel.app", "http://localhost:5173"],
    credentials: true, // if you use cookies
  })
);
app.use(express.json());

// Static folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/files', fileRoutes); // ✅ Only use this
app.use('/api/feedback', feedbackRoutes);

// Preview route
app.get("/api/files/view/:filename", (req, res) => {
  const filePath = path.join(__dirname, "uploads", req.params.filename);
  res.setHeader("Content-Type", "application/pdf");
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Preview error:", err.message);
      res.status(404).send("File not found for preview.");
    }
  });
});

// Health check
app.get('/', (req, res) => {
  res.send('✅ Exam Mate 4 Backend is Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
