const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets (images, css, js) from 'public'
app.use('/public', express.static(path.join(__dirname, 'public')));

// Route for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Allow access to specific HTML files only
app.get('/:page', (req, res) => {
  const page = req.params.page;
  // Simple validation to ensure they only request .html files
  if (page.match(/^[a-zA-Z0-9-]+\.html$/)) {
    res.sendFile(path.join(__dirname, page));
  } else {
    res.status(404).send('Not found');
  }
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
