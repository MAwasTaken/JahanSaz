// dependency imports
const Order = require('../models/Orders');
const product = require('../models/Products');
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('./varifyToken');
const router = require('express').Router();

//CREATE router
router.post('/', verifyToken, async (req, res) => {
	// create the Order object
	const newOrder = new Order(req.body);

	try {
		// save the user in DB
		const savedOrder = await newOrder.save();

		// set the response
		res.status(200).json(savedOrder);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
});

//UPDATE router
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		// find the Order by ID and update it
		const updatedOrder = await Order.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body
			},
			{ new: true }
		);

		// set the response
		res.status(200).json(updatedOrder);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
});

//DELETE router
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		// find By Id And Delete the Order
		await Order.findByIdAndDelete(req.params.id);

		// set the responce
		res.status(200).json('Order has been deleted...');
	} catch (err) {
		// return the err if there is one

		res.status(500).json(err);
	}
});

//GET USER ORDERS router
router.get('/find/:userId', verifyTokenAndAuth, async (req, res) => {
	try {
		// find the card By the userID
		const orders = await Order.find({ userId: req.params.userId });

		// set the response
		res.status(200).json(orders);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
});

//GET ALL router
router.get('/', verifyTokenAndAdmin, async (req, res) => {
	try {
		// find all the acrds saved in DB
		const orders = await Order.find();

		// set the response
		res.status(200).json(orders);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
});

// GET MONTHLY INCOME router
router.get('/sales', verifyTokenAndAdmin, async (req, res) => {
	// create the time
	const date = new Date();
	const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
	const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

	try {
		//calc the income
		const income = await Order.aggregate([
			{ $match: { createdAt: { $gte: previousMonth } } },
			{
				$project: {
					month: { $month: '$createdAt' },
					sales: '$amount'
				}
			},
			{
				$group: {
					_id: '$month',
					total: { $sum: '$sales' }
				}
			}
		]);

		// set the response
		res.status(200).json(income);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
});

//export the Router
module.exports = router;
