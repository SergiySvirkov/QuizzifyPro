const BASE_URL = 'http://localhost:5000/api'; // Replace with your actual API base URL

const api = {
  // Example endpoint to fetch quiz data
  getQuizData: (quizId) => {
    return fetch(`${BASE_URL}/quizzes/${quizId}`)
      .then((response) => response.json())
      .then((data) => data);
  },

  // Example endpoint to submit quiz data
  submitQuizData: (quizData) => {
    return fetch(`${BASE_URL}/quizzes/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quizData),
    })
      .then((response) => response.json())
      .then((data) => data);
  },

  // Add more API endpoints as needed
};

export default api;
