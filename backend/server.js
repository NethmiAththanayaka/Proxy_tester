// backend/server.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const port = 8001;
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3001'
}));

// Define a route to proxy requests
app.get('/api/data', async (req, res) => {
  try {
    // Forward the request to an external API (jsonplaceholder as an example)
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
