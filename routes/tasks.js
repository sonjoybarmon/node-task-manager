const express = require("express");
const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

const router = express.Router();

// GET /tasks
router.get("/", getAllTasks);

// GET /tasks/:id
router.get("/:id", getTask);

// POST create  /tasks
router.post("/", createTask);

// PUT update /tasks/:id
router.put("/:id", updateTask);

// DELETE /tasks/:id
router.delete("/:id", deleteTask);

module.exports = router;
