// Initiate the server and connect to MongoDB
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/football_blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Log queries
mongoose.set('debug', true);

// Use routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
