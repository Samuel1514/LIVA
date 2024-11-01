// Load environment variables from .env file
require('dotenv').config();

// Import necessary packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Import routes
const healthRoutes = require('./routes/health');

// Use routes
app.use('/api/health', healthRoutes);

// MongoDB connection
const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch((error) => console.log('Could not connect to MongoDB...', error));

// Define PORT
const PORT = process.env.PORT || 3001;

// Start server and handle port conflicts
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${PORT} is in use, trying another port...`);
    app.listen(0, () => {
      console.log(`Server is running on an available port`);
    });
  }
});
