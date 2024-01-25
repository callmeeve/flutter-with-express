const taskModel = require('../models/taskModel');

exports.getTasks = async (req, res) => {
  const tasks = await taskModel.getAll();
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const task = await taskModel.create({
    ...req.body,
    user_id: req.params.userId
  });
  res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
  const updatedTask = await taskModel.update(req.params.id, req.body);
  res.json(updatedTask);
};

exports.deleteTask = async (req, res) => {
  await taskModel.delete(req.params.id);
  res.status(204).end();
};