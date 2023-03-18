const express = require("express");
const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

// // GET /tasks
// router.get("/", getAllTasks);

// // GET /tasks/:id
// router.get("/:id", getTask);

// // POST create  /tasks
// router.post("/", createTask);

// // PUT update /tasks/:id
// router.patch("/:id", updateTask);

// // DELETE /tasks/:id
// router.delete("/:id", deleteTask);

module.exports = router;
