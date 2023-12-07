const express = require('express');
const surveyController = require('../controllers/surveyController');

const router = express.Router();

// Survey routes
router.get('/surveys/:surveyId', surveyController.getSurveyById);
router.post('/surveys/submit', surveyController.submitSurvey);

// Add more survey routes as needed

module.exports = router;

