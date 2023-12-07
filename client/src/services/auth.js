const BASE_URL = 'http://localhost:5000/auth'; // Replace with your actual authentication API base URL

const auth = {
  // Example endpoint to log in
  login: (credentials) => {
    return fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => data);
  },

  // Example endpoint to register
  register: (userData) => {
    return fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => data);
  },

  // Add more authentication endpoints as needed
};

export default auth;

