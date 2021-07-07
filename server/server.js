//Import libraries
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors')
require('dotenv/config');
const fs = require('fs');
const PORT_CONNECTION = 4200;

//Declare express as a variable
const app = express();

app.use(bodyParser.json());

// this middleware will be executed for every request to the app
app.use((req, res, next) => {
	res.header("Content-Type",'application/json');
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-methods", "PUT, DELETE, POST, GET");
	next();
});

//Import routes
const recipeRoute = require('./routes/recipe-route');

//Custom routes applied from routes folder:
app.use('/recipes', recipeRoute);


//Main route
app.get('/', (req, res) => {
	res.status(200);
	res.end();
});


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { 
		useNewUrlParser: true, 
		useUnifiedTopology: true, 
		useFindAndModify: false 
	}, () => {
	console.log('Connected to DB');
});

//Starting the server
app.listen(PORT_CONNECTION, () => {
	console.log("Listening on port " + PORT_CONNECTION);
});