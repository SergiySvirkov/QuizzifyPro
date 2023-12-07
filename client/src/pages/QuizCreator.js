import React, { useState } from 'react';
import Quiz from '../components/Quiz/Quiz';
import '../../assets/css/styles.css'; // Import global styles

function QuizCreator() {
  const [quizData, setQuizData] = useState({
    title: '',
    description: '',
    questions: [],
  });

  const handleTitleChange = (e) => {
    setQuizData({ ...quizData, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setQuizData({ ...quizData, description: e.target.value });
  };

  const handleAddQuestion = () => {
    // Add a new question object to the questions array
    setQuizData({
      ...quizData,
      questions: [...quizData.questions, { id: quizData.questions.length + 1, text: '', options: [] }],
    });
  };

  const handleQuestionTextChange = (questionId, text) => {
    // Update the text of the specified question
    setQuizData({
      ...quizData,
      questions: quizData.questions.map((question) =>
        question.id === questionId ? { ...question, text } : question
      ),
    });
  };

  const handleAddOption = (questionId) => {
    // Add a new option to the specified question
    setQuizData({
      ...quizData,
      questions: quizData.questions.map((question) =>
        question.id === questionId ? { ...question, options: [...question.options, ''] } : question
      ),
    });
  };

  const handleOptionTextChange = (questionId, optionIndex, text) => {
    // Update the text of the specified option
    setQuizData({
      ...quizData,
      questions: quizData.questions.map((question) =>
        question.id === questionId
          ? { ...question, options: question.options.map((option, index) => (index === optionIndex ? text : option)) }
          : question
      ),
    });
  };

  const handleRemoveOption = (questionId, optionIndex) => {
    // Remove the specified option from the specified question
    setQuizData({
      ...quizData,
      questions: quizData.questions.map((question) =>
        question.id === questionId
          ? { ...question, options: question.options.filter((_, index) => index !== optionIndex) }
          : question
      ),
    });
  };

  const handleRemoveQuestion = (questionId) => {
    // Remove the specified question from the quiz
    setQuizData({
      ...quizData,
      questions: quizData.questions.filter((question) => question.id !== questionId),
    });
  };

  const handleSubmitQuiz = () => {
    // Implement quiz submission logic (e.g., API call to save the quiz)
    console.log('Quiz Data:', quizData);
  };

  return (
    <div className="quiz-creator-container">
      <h2>Quiz Creator</h2>
      <div className="quiz-form">
        <label>Title:</label>
        <input type="text" value={quizData.title} onChange={handleTitleChange} />

        <label>Description:</label>
        <textarea value={quizData.description} onChange={handleDescriptionChange} />

        <button onClick={handleAddQuestion}>Add Question</button>

        {quizData.questions.map((question) => (
          <Quiz
            key={question.id}
            question={question}
            onTextChange={(text) => handleQuestionTextChange(question.id, text)}
            onAddOption={() => handleAddOption(question.id)}
            onOptionTextChange={(index, text) => handleOptionTextChange(question.id, index, text)}
            onRemoveOption={(index) => handleRemoveOption(question.id, index)}
            onRemoveQuestion={() => handleRemoveQuestion(question.id)}
          />
        ))}

        <button onClick={handleSubmitQuiz}>Submit Quiz</button>
      </div>
    </div>
  );
}

export default QuizCreator;

