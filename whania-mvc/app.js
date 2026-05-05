/**
 * MVC Application Entry Point
 * Created for: whania-mvc
 */
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes (placeholder)
// const routes = require('./routes');
// app.use('/', routes);

app.get('/', (req, res) => {
  res.send('MVC App is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
