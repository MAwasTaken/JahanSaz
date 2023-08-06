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
	// CORS for browsers
	app.use(cors());

	// JSON converter
	app.use(express.json());

	// make the images folder publick (static)
	app.use('/productImages', express.static('productImages'));

	// set the routers
	app.use('/api/auth', authRouter);
	app.use('/api/users', userRouter);
	app.use('/api/products', productsRouter);
	app.use('/api/orders', ordersRouter);
	app.use('/api/cards', cardsRouter);
};
