<<<<<<< HEAD
const express = require("express");
const cors = require("cors");
const authRouter = require("../routes/auth");
const userRouter = require("../routes/user");
const productsRouter = require("../routes/product");

module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use("/api/auth", authRouter);
  app.use("/api/users", userRouter);
  app.use("/api/products", productsRouter);
};
=======
const express = require('express');
const cors = require('cors');
const authRouter = require('../routes/auth');
const userRouter = require('../routes/user');
const productsRouter = require('../routes/product');

module.exports = function (app) {
	app.use(cors());
	app.use(express.json());
	app.use('/api/auth', authRouter);
	app.use('/api/users', userRouter);
	app.use('/api/products', productsRouter);
};
>>>>>>> e7ea6bb46797b4c1deefa2e8e31bed8de75ff129
