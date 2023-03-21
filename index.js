// db here
require("./db/connectDb");
const express = require("express");
const tasks = require("./routes/tasks");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/api/v1/tasks", tasks);

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
