const bcrypt = require("bcrypt");
const pool = require("../db");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  generateToken: (user) => {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
  },

  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
  },

  create: async (user) => {
    user.password = await bcrypt.hash(user.password, saltRounds);
    const [result] = await pool.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [user.name, user.email, user.password]
    );
    user.id = result.insertId;
    user.token = this.generateToken(user);
    return user;
  },

  update: async (id, updatedUser) => {
    updatedUser.password = await bcrypt.hash(updatedUser.password, saltRounds);
    await pool.query(
      "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?",
      [updatedUser.name, updatedUser.email, updatedUser.password, id]
    );
    return updatedUser;
  },

  delete: async (id) => {
    await pool.query("DELETE FROM users WHERE id = ?", id);
  },

  findByEmail: async (email) => {
    const [rows] = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      email
    );
    return rows[0];
  },

  comparePassword: async (password, hash) => {
    return await bcrypt.compare(password, hash);
  },
};
