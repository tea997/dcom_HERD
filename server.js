const express = require('express');
const path = require('path');

const app = express();

// Serve static files from current directory
app.use(express.static(path.join(__dirname)));

// Handle SPA routing - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`HARK website server running on port ${port}`);
});
