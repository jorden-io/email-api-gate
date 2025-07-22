// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // allow external access if needed

// Serve static HTML from the public folder
app.use(express.static('public'));

// REST endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from your site’s REST endpoint!' });
});

app.listen(PORT, () => {
  console.log(`Site running on http://localhost:${PORT}`);
});
