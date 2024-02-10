// const express = require('express');
// const bodyParser = require('body-parser');
// const { MongoClient } = require('mongodb');
// const path = require('path');

// // Connection URI
// const uri = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'edp';

// // Create a new MongoClient
// const client = new MongoClient(uri);

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// async function main() {
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();

//         console.log('Connected to the database');

//         // Specify the database to be used
//         const db = client.db(dbName);

//         app.post('/tasks', async (req, res) => {
//             try {
//                 await db.collection('tasks').insertOne({
//                     name: req.body.nameInput,
//                     task: req.body.taskInput,
//                     date: new Date()
//                 });
//                 console.log('Saved to database');
//                 res.redirect('/');
//             } catch (error) {
//                 console.error('Error inserting data:', error);
//                 res.status(500).send('Error inserting data');
//             }
//         });

//         app.listen(5500, function() {
//             console.log('listening on 5500');
//         });

//     } catch (error) {
//         console.error('Error connecting to the database:', error);
//     }
// }

// main().catch(console.error);

const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect(
"mongodb://localhost:27017/edp",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	});

const taskSchema = {
	name: String,
	task: String,
};

const Task =
	mongoose.model("Task", taskSchema);

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static(__dirname + '/public'));

app.get("/taskForm",
	function (req, res) {
		res.render("task");
	});

app.post("/taskForm",
	function (req, res) {
		console.log(req.body.email);
		const task = new Task({
			name: req.body.nameInput,
			task: req.body.taskInput,
		});
		task.save(function (err) {
			if (err) {
				throw err;
			} else {
				res.render("task");
			}
		});
	});

app.listen(5500,
	function () {
		console.log("App is running on Port 5500");
	});
