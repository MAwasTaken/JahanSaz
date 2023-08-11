const Cart = require('../models/Card');

const createCardController = async (req, res) => {
	// create the card object
	const newCart = new Cart(req.body);

	try {
		// save the card in DB
		const savedCart = await newCart.save();

		// set the response
		res.status(200).json(savedCart);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
};

const updateCardController = async (req, res) => {
	try {
		// find the Card by ID and update it
		const updatedCart = await Cart.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body
			},
			{ new: true }
		);

		// set the response
		res.status(200).json(updatedCart);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
};

const deleteCardController = async (req, res) => {
	try {
		// find By Id And Delete the card
		await Cart.findByIdAndDelete(req.params.id);

		// set the response
		res.status(200).json('Cart has been deleted...');
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
};

const getCardByUserIdController = async (req, res) => {
	try {
		// find the card By the userID
		const cart = await Cart.findOne({ userId: req.params.userId });

		//set the response
		res.status(200).json(cart);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
};

const getAllCardsIdController = async (req, res) => {
	try {
		// find all the acrds saved in DB
		const carts = await Cart.find();

		//set the response
		res.status(200).json(carts);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
};

module.exports = {
	createCardController,
	updateCardController,
	deleteCardController,
	getCardByUserIdController,
	getAllCardsIdController
};
