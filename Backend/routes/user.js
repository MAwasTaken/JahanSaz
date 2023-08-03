// dependency imports
const User = require('../models/Users');
const router = require('express').Router();
const { verifyTokenAndAuth, verifyTokenAndAdmin } = require('./varifyToken');
const CryptoJS = require('crypto-js');
const userJoi = require('../joi-models/joi-users-schema');

//UPDATE router
router.put('/:id', verifyTokenAndAuth, async (req, res) => {
	// encrypt the Password if there is one
	if (req.body.password) {
		req.body.password = CryptoJS.AES.encrypt(
			req.body.password,
			process.env.PASS_SEC_KEY
		).toString();
	}

	try {
		// validate JOI
		await userJoi.validateAsync(req.body);

		// find the User by ID and update it
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body
			},
			{ new: true }
		);

		// set the response
		res.status(200).json(updatedUser);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
});

//DELETE router
router.delete('/:id', verifyTokenAndAuth, async (req, res) => {
	try {
		// find By Id And Delete the User
		await User.findByIdAndDelete(req.params.id);

		// set the response
		res.status(200).json('User has been deleted...');
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
});

//GET USER router
router.get('/find/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		// find the User By the ID
		const user = await User.findById(req.params.id);

		// split the from the object
		const { password, ...others } = user._doc;

		// set the response
		res.status(200).json(others);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
});

//GET ALL USER router
router.get('/', verifyTokenAndAdmin, async (req, res) => {
	// Define queries
	const query = req.query.new;

	try {
		// define the responce
		let users;

		//if there is "NEW" query
		if (query) {
			// return the newest Users
			users = await User.find().sort({ _id: -1 }).limit(query);
		} else {
			//return ALL
			users = await User.find();
		}

		// set the response
		res.status(200).json(users);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
});

//export the Router
module.exports = router;
