import React, { useState } from 'react';
import Survey from '../components/Survey/Survey';
import '../../assets/css/styles.css'; // Import global styles

function SurveyCreator() {
  const [surveyData, setSurveyData] = useState({
    title: '',
    description: '',
    questions: [],
  });

  const handleTitleChange = (e) => {
    setSurveyData({ ...surveyData, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setSurveyData({ ...surveyData, description: e.target.value });
  };

  const handleAddQuestion = () => {
    // Add a new question object to the questions array
    setSurveyData({
      ...surveyData,
      questions: [...surveyData.questions, { id: surveyData.questions.length + 1, text: '', options: [] }],
    });
  };

  const handleQuestionTextChange = (questionId, text) => {
    // Update the text of the specified question
    setSurveyData({
      ...surveyData,
      questions: surveyData.questions.map((question) =>
        question.id === questionId ? { ...question, text } : question
      ),
    });
  };

  const handleAddOption = (questionId) => {
    // Add a new option to the specified question
    setSurveyData({
      ...surveyData,
      questions: surveyData.questions.map((question) =>
        question.id === questionId ? { ...question, options: [...question.options, ''] } : question
      ),
    });
  };

  const handleOptionTextChange = (questionId, optionIndex, text) => {
    // Update the text of the specified option
    setSurveyData({
      ...surveyData,
      questions: surveyData.questions.map((question) =>
        question.id === questionId
          ? { ...question, options: question.options.map((option, index) => (index === optionIndex ? text : option)) }
          : question
      ),
    });
  };

  const handleRemoveOption = (questionId, optionIndex) => {
    // Remove the specified option from the specified question
    setSurveyData({
      ...surveyData,
      questions: surveyData.questions.map((question) =>
        question.id === questionId
          ? { ...question, options: question.options.filter((_, index) => index !== optionIndex) }
          : question
      ),
    });
  };

  const handleRemoveQuestion = (questionId) => {
    // Remove the specified question from the survey
    setSurveyData({
      ...surveyData,
      questions: surveyData.questions.filter((question) => question.id !== questionId),
    });
  };

  const handleSubmitSurvey = () => {
    // Implement survey submission logic (e.g., API call to save the survey)
    console.log('Survey Data:', surveyData);
  };

  return (
    <div className="survey-creator-container">
      <h2>Survey Creator</h2>
      <div className="survey-form">
        <label>Title:</label>
        <input type="text" value={surveyData.title} onChange={handleTitleChange} />

        <label>Description:</label>
        <textarea value={surveyData.description} onChange={handleDescriptionChange} />

        <button onClick={handleAddQuestion}>Add Question</button>

        {surveyData.questions.map((question) => (
          <Survey
            key={question.id}
            question={question}
            onTextChange={(text) => handleQuestionTextChange(question.id, text)}
            onAddOption={() => handleAddOption(question.id)}
            onOptionTextChange={(index, text) => handleOptionTextChange(question.id, index, text)}
            onRemoveOption={(index) => handleRemoveOption(question.id, index)}
            onRemoveQuestion={() => handleRemoveQuestion(question.id)}
          />
        ))}

        <button onClick={handleSubmitSurvey}>Submit Survey</button>
      </div>
    </div>
  );
}

export default SurveyCreator;

