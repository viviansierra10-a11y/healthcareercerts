const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve static files from root
app.use(express.static(__dirname));

// Route for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'PDHomePage.html'));
});

// Route for all HTML files
app.get('/*.html', (req, res) => {
  const filePath = path.join(__dirname, req.path);
  res.sendFile(filePath);
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
