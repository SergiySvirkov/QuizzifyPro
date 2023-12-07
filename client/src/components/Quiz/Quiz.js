import React, { useState } from 'react';
import '../../assets/css/styles.css'; // Import global styles
import './Quiz.css'; // Import component-specific styles

function Quiz() {
  // Example state for quiz questions
  const [questions, setQuestions] = useState([
    { id: 1, text: 'What is the capital of France?', options: ['Paris', 'Berlin', 'Madrid', 'Rome'], correctAnswer: 'Paris' },
    { id: 2, text: 'Which planet is known as the Red Planet?', options: ['Mars', 'Venus', 'Jupiter', 'Saturn'], correctAnswer: 'Mars' },
    // Add more questions as needed
  ]);

  // Example state to track selected answers
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Handle selecting an answer for a question
  const handleSelectAnswer = (questionId, answer) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: answer });
  };

  // Example function to submit the quiz
  const handleSubmitQuiz = () => {
    // Implement quiz submission logic
    console.log('Selected Answers:', selectedAnswers);
  };

  return (
    <div className="quiz-container">
      <h2>Quiz Title</h2>
      {questions.map((question) => (
        <div key={question.id} className="question">
          <p>{question.text}</p>
          <div className="options">
            {question.options.map((option) => (
              <label key={option} className="option">
                <input
                  type="radio"
                  name={`question_${question.id}`}
                  value={option}
                  checked={selectedAnswers[question.id] === option}
                  onChange={() => handleSelectAnswer(question.id, option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleSubmitQuiz}>Submit Quiz</button>
    </div>
  );
}

export default Quiz;

