<<<<<<< HEAD
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

require("./start/routes")(app);

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connection Successfull!");
    server = app.listen(process.env.PORT5 || 5000, () => {
      console.log("Backend server is running!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
=======
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();

require('./start/routes')(app);

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log('DB Connection Successfully!');
		server = app.listen(process.env.PORT5 || 3000, () => {
			console.log('Backend server is running!');
		});
	})
	.catch((err) => {
		console.log(err);
	});
>>>>>>> e7ea6bb46797b4c1deefa2e8e31bed8de75ff129
