function errorHandler(err, req, res, next) {
  console.error(err.stack);

  // Handle specific errors
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ success: false, message: 'Unauthorized access.' });
  }

  // Handle other errors
  res.status(500).json({ success: false, message: 'Internal server error.' });
}

module.exports = {
  errorHandler,
};

