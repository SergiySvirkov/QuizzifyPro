const jwt = require('jsonwebtoken');
const config = require('../config/config');

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ success: false, message: 'Access denied. No token provided.' });
  }

  jwt.verify(token, config.auth.secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Failed to authenticate token.' });
    }
    req.user = user;
    next();
  });
}

module.exports = {
  authenticateToken,
};
