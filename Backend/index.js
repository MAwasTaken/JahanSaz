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
