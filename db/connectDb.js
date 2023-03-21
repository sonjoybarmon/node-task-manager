// create connect function with mongoose also return data connect or not
const mongoose = require("mongoose");

const URL = "mongodb+srv://***:***@cluster0.5trbi.mongodb.net/taskManager";

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });
