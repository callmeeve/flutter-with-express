const express = require("express");
const userRoutes = require("./src/routes/userRoutes");
const taskRoutes = require("./src/routes/taskRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/users/:userId/tasks", taskRoutes);

module.exports = app;

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
