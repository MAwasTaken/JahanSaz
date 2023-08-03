// dependency imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// express app
const app = express();

//setting the midlewares and routes
require('./start/routes')(app);

// enviroment variables config
dotenv.config();

// DB conection
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		// log the server status
		console.log('DB Connection Successfully!');
		server = app.listen(process.env.PORT5 || 3000, () => {
			console.log('Backend server is running!');
		});
	})
	.catch((err) => {
		console.log(err);
	});
