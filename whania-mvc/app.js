/**
 * MVC Application Entry Point
 * 项目骨架 — whania-mvc
 */
const express = require('express');
const path = require('path');
const config = require('./config/env');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// --- Middleware ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger);

// --- Routes ---
const rootRoutes = require('./routes/index');
const userRoutes = require('./routes/userRoutes');

app.use('/', rootRoutes);
app.use('/api/users', userRoutes);

// --- Error Handling ---
app.use(errorHandler);

// --- Start Server ---
app.listen(config.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${config.PORT}`);
  console.log(`   Environment: ${config.NODE_ENV}`);
});

module.exports = app;
