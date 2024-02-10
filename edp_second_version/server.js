const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 5500;

// Create connection to MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '62011050970693',
  database: 'edp_database'
});

// Connect to database
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route to serve HTML form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route to handle form submission
app.post('/submit', (req, res) => {
  const { name, task } = req.body;
  
  // Insert data into database
  const sql = `INSERT INTO tasks (name, task) VALUES (?, ?)`;
  db.query(sql, [name, task], (err, result) => {
    if (err) throw err;
    console.log('Data inserted into database');
    res.send('Data inserted into database');
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
