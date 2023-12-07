const express = require('express');
const quizController = require('../controllers/quizController');

const router = express.Router();

// Quiz routes
router.get('/quizzes/:quizId', quizController.getQuizById);
router.post('/quizzes/submit', quizController.submitQuiz);

// Add more quiz routes as needed

module.exports = router;

