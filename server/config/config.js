module.exports = {
  // Configuration for the server
  server: {
    port: process.env.PORT || 5000,
  },

  // Configuration for the database (replace with your actual database configuration)
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    name: process.env.DB_NAME || 'quizzifypro',
  },

  // Configuration for authentication (replace with your actual configuration)
  auth: {
    secretKey: process.env.AUTH_SECRET_KEY || 'your-secret-key',
    expiresIn: process.env.AUTH_EXPIRES_IN || '7d',
  },
};
