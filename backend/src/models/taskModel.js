const pool = require("../db");

module.exports = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM tasks");
    return rows;
  },

  create: async (task) => {
    const [result] = await pool.query(
      "INSERT INTO tasks (title, description, completed, user_id) VALUES (?, ?, ?, ?)",
      [task.title, task.description, task.completed || false, task.user_id]
    );
    task.id = result.insertId;
    return task;
  },

  update: async (id, updatedTask) => {
    await pool.query(
      "UPDATE tasks SET title = ?, description = ?, completed = ?, user_id = ? WHERE id = ?",
      [updatedTask.title, updatedTask.description, updatedTask.completed, updatedTask.user_id, id]
    );
    return updatedTask;
  },

  delete: async (id) => {
    await pool.query("DELETE FROM tasks WHERE id = ?", id);
  },
};