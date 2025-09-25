// const express = require('express');
// const router = express.Router();
// const { register, login } = require('../controllers/authController');

// router.post('/register', register);
// router.post('/login', login);

// module.exports = router;



const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const requireAuth = require('../middleware/authMiddleware'); // ✅ middleware import

// Register Route
router.post('/register', register);

// Login Route
router.post('/login', login);

// 🔐 Protected Test Route
router.get('/protected', requireAuth, (req, res) => {
  res.json({
    message: `Welcome ${req.user.id}, you accessed a protected route!`
  });
});

module.exports = router; // ✅ This was missing
