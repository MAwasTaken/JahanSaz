// dependency imports
const express = require('express');
const cors = require('cors');

// routers imports
const authRouter = require('../routes/auth');
const userRouter = require('../routes/user');
const productsRouter = require('../routes/product');
const ordersRouter = require('../routes/order');
const cardsRouter = require('../routes/card');

//use the routers and midlewares , Export the function
module.exports = function (app) {
	app.use(cors());
	app.use(express.json());
	app.use('/api/auth', authRouter);
	app.use('/api/users', userRouter);
	app.use('/api/products', productsRouter);
	app.use('/api/orders', ordersRouter);
	app.use('/api/cards', cardsRouter);
};
