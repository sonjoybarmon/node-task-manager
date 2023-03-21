// create task models

const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter task name"],
    trim: true,
    maxlength: [20, "Name cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Tasks", taskSchema);

module.exports = Task;
