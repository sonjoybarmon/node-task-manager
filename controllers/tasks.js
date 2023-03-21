const Tasks = require("../models/tasks");

const getAllTasks = async (req, res) => {
  try {
    // res.send("Hello, world!, i am a task");
    const tasks = await Tasks.find();
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// create task

const createTask = async (req, res) => {
  console.log(req.body, "body");
  try {
    const task = await new Tasks(req.body);
    await task.save();
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get single task

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Tasks.findById(id);
    if (task) {
      return res.status(200).json({ task });
    }
    res.status(404).json({ message: "Task not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update task

const updateTask = async (req, res) => {
  try {
    // patch function create here
    try {
      const { id } = req.params;
      const task = await Tasks.findOneAndUpdate(id, res.body, {
        new: true,
        runValidators: true,
      });

      if (task) {
        await task.save();
        return res.status(200).json({ task });
      }
      res.status(404).json({ message: "Task not found!" });
    } catch (error) {}
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete task

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Tasks.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Task deleted");
    }
    throw new Error("Task not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
