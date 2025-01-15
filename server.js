const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
