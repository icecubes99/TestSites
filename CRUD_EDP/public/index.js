const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'edp';

// Create a new MongoClient
const client = new MongoClient(uri);

document.getElementById('taskForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var nameInput = document.getElementById('nameInput').value;
  var taskInput = document.getElementById('taskInput').value;

  fetch('/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `nameInput=${encodeURIComponent(nameInput)}&taskInput=${encodeURIComponent(taskInput)}`,
  })
  .then(response => response.text())
  .then(data => console.log(data))
  .catch((error) => {
    console.error('Error:', error);
  });
});

async function main() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        console.log('Connected to the database');

        // Specify the database to be used
        const db = client.db(dbName);

        // Perform operations using the db object

        app.post('/tasks', async (req, res) => {
          try {
              await db.collection('tasks').insertOne({
                  name: req.body.nameInput,
                  task: req.body.taskInput,
                  date: new Date()
              });
              console.log('Saved to database');
              res.redirect('/');
          } catch (error) {
              console.error('Error inserting data:', error);
              res.status(500).send('Error inserting data');
          }
      });

      app.listen(3000, function() {
          console.log('listening on 3000');
      });

    } catch (error) {
        console.error('Error connecting to the database:', error);
    } finally {
        // Close the connection when done
        await client.close();
    }
}

main().catch(console.error);

