// dependency imports
const Product = require('../models/Products');
const { verifyTokenAndAdmin } = require('./varifyToken');
const router = require('express').Router();

//CREATE router
router.post('/', verifyTokenAndAdmin, async (req, res) => {
	// create the Product object
	const newProduct = new Product(req.body);

	try {
		// save the user in DB
		const savedProduct = await newProduct.save();

		// set the response
		res.status(200).json(savedProduct);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
});

//UPDATE router
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		// find the Product by ID and update it
		const updatedProduct = await Product.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body
			},
			{ new: true }
		);

		//set the response
		res.status(200).json(updatedProduct);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
});

//DELETE router
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		// find By Id And Delete the Product
		await Product.findByIdAndDelete(req.params.id);

		//set the respone
		res.status(200).json('Product has been deleted...');
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
});

//GET PRODUCT BY ID router
router.get('/find/:id', async (req, res) => {
	try {
		// find the card By the ID
		const product = await Product.findById(req.params.id);
		//set the response
		res.status(200).json(product);
	} catch (err) {
		// return the err if there is one
		res.status(500).json(err);
	}
});

//GET ALL PRODUCTS router
router.get('/', async (req, res) => {
	// Define queries
	const qNew = req.query.new;
	const qSearch = req.query.search;
	const qBestSeller = req.query.bestseller;
	const qPage = req.query.page - 1;
	const qPagesCount = req.query.pagescount;

	try {
		//Define the response objects
		let products;
		let pages;

		// if there is "new" query
		if (qNew) {
			//return the newest Products
			products = await Product.find().sort({ createdAt: -1 }).limit(qNew);
		} // if there is "Search" query
		else if (qSearch) {
			// search in Products and return the resualt
			products = await Product.find({
				productName: { $regex: qSearch }
			}).sort({ createdAt: -1 });
		} // if there is "BestSeller" query
		else if (qBestSeller) {
			// return BestSeller Products
			products = await Product.find().sort({ best_seller: -1 }).limit(qBestSeller);
		} // if there is "Page" query
		else if (qPage) {
			// return the page of Products
			products = await Product.find()
				.skip(qPage * 9)
				.limit(9);
		} // if there is "PagesCount" query
		else if (qPagesCount) {
			// calculate and return the number of pages
			const countDocuments = await Product.countDocuments();
			pages = Math.ceil(countDocuments / 9);
		} else {
			//return All Products
			products = await Product.find();
		}

		// set the response
		res.status(200).json({ products, pages });
	} catch (err) {
		res.status(500).json(err);
	}
});

//export the Router
module.exports = router;
