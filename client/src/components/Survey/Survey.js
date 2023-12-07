import React, { useState } from 'react';
import '../../assets/css/styles.css'; // Import global styles
import './Survey.css'; // Import component-specific styles

function Survey() {
  // Example state for survey questions
  const [questions, setQuestions] = useState([
    { id: 1, text: 'How satisfied are you with our service?', options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'] },
    { id: 2, text: 'What feature would you like to see in our next release?', options: ['Feature A', 'Feature B', 'Feature C', 'Other'] },
    // Add more questions as needed
  ]);

  // Example state to store user responses
  const [responses, setResponses] = useState({});

  // Handle selecting a response for a question
  const handleSelectResponse = (questionId, response) => {
    setResponses({ ...responses, [questionId]: response });
  };

  // Example function to submit the survey
  const handleSubmitSurvey = () => {
    // Implement survey submission logic
    console.log('User Responses:', responses);
  };

  return (
    <div className="survey-container">
      <h2>Survey Title</h2>
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
                  checked={responses[question.id] === option}
                  onChange={() => handleSelectResponse(question.id, option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleSubmitSurvey}>Submit Survey</button>
    </div>
  );
}

export default Survey;

