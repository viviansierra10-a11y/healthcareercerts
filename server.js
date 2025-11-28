const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Route for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'PDHomePage.html'));
});

// Route for all HTML files
app.get('/*.html', (req, res) => {
  res.sendFile(path.join(__dirname, req.path));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
