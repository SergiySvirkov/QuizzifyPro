const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/config');

// Example user data (replace with actual user data storage)
const users = [
  { id: 1, username: 'user1', email: 'user1@example.com', password: '$2b$10$F.jyKh8C3UpHgIg7aEiaNe/cswFWo61Pl2/fCenbGWGg6C47tDTG6' }, // Hashed "password1"
  // Add more users as needed
];

function generateToken(user) {
  const payload = { id: user.id, username: user.username, email: user.email };
  const token = jwt.sign(payload, config.auth.secretKey, { expiresIn: config.auth.expiresIn });
  return token;
}

async function login(req, res) {
  const { email, password } = req.body;

  // Find user by email
  const user = users.find((u) => u.email === email);

  // Check if user exists
  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  // Compare entered password with stored hashed password
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ success: false, message: 'Invalid password' });
  }

  // Generate and return JWT token
  const token = generateToken(user);
  res.json({ success: true, token });
}

// Add more authentication-related functions as needed

module.exports = {
  login,
};
