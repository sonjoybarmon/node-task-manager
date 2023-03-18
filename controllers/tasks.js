const getAllTasks = async (req, res) => {
  try {
    res.send("Hello, world!, i am a task");
    // const tasks = await Task.find();
    // res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// create task

const createTask = async (req, res) => {
  try {
    res.send("Hello, world!, i am a create task");
    // const task = await new Task(req.body);
    // await task.save();
    // res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get single task

const getTask = async (req, res) => {
  try {
    res.send("Hello, world!, i am a get task");
    // const { id } = req.params;
    // const task = await Task.findById(id);
    // if (task) {
    //     return res.status(200).json({ task });
    // }
    // res.status(404).json({ message: "Task not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update task

const updateTask = async (req, res) => {
  try {
    res.send("Hello, world!, i am a update task");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete task

const deleteTask = async (req, res) => {
  try {
    res.send("Hello, world!, i am a delete task");
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
