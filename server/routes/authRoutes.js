const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// Authentication routes
router.post('/login', authController.login);

// Add more authentication routes as needed

module.exports = router;
