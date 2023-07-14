const { Router } = require('express');
const Order = require('../models/Orders');
const product = require('../models/Products');
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require('./varifyToken');

const router = require('express').Router();

//CREATE
router.post('/', verifyToken, async (req, res) => {
	const newOrder = new Order(req.body);
	const products = newOrder.products;

	try {
		let totalprice;
		products.forEach(async (element) => {
			const purchasedProduct = await product.findById(element.productId);
			let newBest_seller = purchasedProduct.best_seller;
			newBest_seller += 1;
			await purchasedProduct.updateOne({ best_seller: newBest_seller });
		});
		Object.assign(newOrder, { totalprice: totalprice });
		const savedOrder = await newOrder.save();
		res.status(200).json(savedOrder);
	} catch (err) {
		res.status(500).json(err);
		console.log(err);
	}
});

//UPDATE
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		const updatedOrder = await Order.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body
			},
			{ new: true }
		);
		req.body.products.forEach(async (element) => {
			const purchasedProduct = await product.findById(element.productId);
			let newBest_seller = purchasedProduct.best_seller;
			newBest_seller += 1;
			await purchasedProduct.updateOne({ best_seller: newBest_seller });
		});
		res.status(200).json(updatedOrder);
	} catch (err) {
		res.status(500).json(err);
	}
});

//DELETE
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		const deletedOrder = await Order.findByIdAndDelete(req.params.id);
		deletedOrder.products.forEach(async (element) => {
			const purchasedProduct = await product.findById(element.productId);
			let newBest_seller = purchasedProduct.best_seller;
			newBest_seller -= 1;
			await purchasedProduct.updateOne({ best_seller: newBest_seller });
		});
		res.status(200).json('Order has been deleted...');
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET USER ORDERS
router.get('/find/:userId', verifyTokenAndAuth, async (req, res) => {
	try {
		const orders = await Order.find({ userId: req.params.userId });
		res.status(200).json(orders);
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET ALL
router.get('/', verifyTokenAndAdmin, async (req, res) => {
	try {
		const orders = await Order.find();
		res.status(200).json(orders);
	} catch (err) {
		res.status(500).json(err);
	}
});

// GET MONTHLY INCOME
router.get('/sales', verifyTokenAndAdmin, async (req, res) => {
	const date = new Date();
	const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
	const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

	try {
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
		res.status(200).json(income);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
