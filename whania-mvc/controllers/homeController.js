/**
 * Home Controller
 */
const path = require('path');

exports.index = (req, res) => {
  res.json({ message: 'Welcome to the MVC App!', version: '1.0.0' });
};

exports.about = (req, res) => {
  res.json({ page: 'About', description: 'MVC skeleton for Whania' });
};
