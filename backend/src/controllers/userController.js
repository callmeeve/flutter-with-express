const userModel = require('../models/userModel');

exports.getUsers = async (req, res) => {
  const users = await userModel.getAll();
  res.json(users);
};

exports.createUser = async (req, res) => {
  const user = await userModel.create(req.body);
  res.status(201).json(user);
};

exports.updateUser = async (req, res) => {
  const updatedUser = await userModel.update(req.params.id, req.body);
  res.json(updatedUser);
};

exports.deleteUser = async (req, res) => {
  await userModel.delete(req.params.id);
  res.status(204).end();
};

// Add these two functions
exports.register = async (req, res) => {
  const user = await userModel.create(req.body);
  const token = userModel.generateToken(user);
  res.status(201).json({ user, token });
};

exports.login = async (req, res) => {
  const user = await userModel.findByEmail(req.body.email);
  if (user && await userModel.comparePassword(req.body.password, user.password)) {
    const token = userModel.generateToken(user);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};
