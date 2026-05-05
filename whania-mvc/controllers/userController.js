/**
 * User Controller
 */
const userModel = require('../models/userModel');

exports.list = (req, res) => {
  const users = userModel.findAll();
  res.json({ success: true, data: users });
};

exports.show = (req, res) => {
  const user = userModel.findById(req.params.id);
  if (!user) return res.status(404).json({ success: false, message: 'User not found' });
  res.json({ success: true, data: user });
};

exports.create = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ success: false, message: 'name & email required' });
  const user = userModel.create({ name, email });
  res.status(201).json({ success: true, data: user });
};
