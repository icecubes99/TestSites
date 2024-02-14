const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "62011050970693",
  database: "edp_database",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected...");
});

app.post("/addTask", (req, res) => {
  let sql = "INSERT INTO tasks SET ?";
  let task = { name: req.body.nameInput, task: req.body.taskInput };
  let query = db.query(sql, task, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ status: "error", message: "Database error." });
    } else {
      res.status(200).json({ status: "success", message: "Task added." });
    }
  });
});

app.listen(5501, () => {
  console.log("Server is running on port 3000");
});
