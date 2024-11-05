// src/routes/index.js
const express = require('express');
const router = express.Router();

// A simple GET route
router.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

// Another example route
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

module.exports = router;
