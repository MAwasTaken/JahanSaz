// dependency imports
const router = require('express').Router();
const User = require('../models/Users');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const userJoi = require('../joi-models/joi-users-schema');

//REGISTER router
router.post('/register', async (req, res) => {
	// create the user object
	const newUser = new User({
		username: req.body.username,
		email: req.body.email,
		firstName: req.body.firstName,
		lastName: req.body.lastName,

		password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC_KEY).toString(),

		isAdmin: req.body.isAdmin,
		phoneNumber: req.body.phoneNumber
	});

	try {
		// validate by Joi
		await userJoi.validateAsync(req.body);

		// save the user in DB
		const savedUser = await newUser.save();

		// set the response
		res.status(200).json(savedUser);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
});

//LOGIN router
router.post('/logIn', async (req, res) => {
	try {
		// find the user By username
		const user = await User.findOne({
			username: req.body.username
		});

		// if there is not a user with that info
		if (user == null) {
			res.status(401).json(' Wrong UserName or password !!');
		} else {
			// if we found a user with that username

			// decrypt the PASSWORD from the DB user
			const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC_KEY);
			const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

			// get the Inputed PASSWORd
			const inputPassword = req.body.password;

			// create the acsess token
			const accessToken = jwt.sign(
				{
					id: user._id,
					isAdmin: user.isAdmin
				},
				process.env.JWT_SEC_key,
				{ expiresIn: '1d' }
			);

			// split the PASSWORD from the object
			const { password, ...others } = user._doc;

			// if the password doesnt matche
			if (inputPassword !== originalPassword) {
				res.status(401).json('Wrong UserName or password !!');
			} else {
				// if it maches we return the object without thw PASSWORD and the acsess token
				res.status(201).json({ ...others, accessToken });
			}
		}
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
});

//export the Router
module.exports = router;
