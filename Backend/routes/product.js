// dependency imports
const Product = require('../models/Products');
const { verifyTokenAndAdmin } = require('../middleware/varifyToken');
const uploader = require('../middleware/uploader');

const router = require('express').Router();
const fs = require('fs');

//CREATE router
router.post('/', verifyTokenAndAdmin, uploader.array('images', 12), async (req, res) => {
	// create the Product object
	let newProduct = new Product(req.body);

	// set the uploaded images address
	let images = req.files.map((element) => element.path);
	newProduct.images = images;

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
router.put('/:id', verifyTokenAndAdmin, uploader.array('images', 12), async (req, res) => {
	try {
		// find the Product by ID and update it
		const updatedProduct = await Product.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
				images: req.files.map((element) => element.path)
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
		const deletedProduct = await Product.findByIdAndDelete(req.params.id);

		// delete the related images from the server
		deletedProduct.images.forEach((Image) => {
			fs.unlinkSync(Image);
		});

		//set the respone
		res.status(200).json('Product has been deleted...');
	} catch (err) {
		// return the err if there is one
		console.log(err);
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
	const qCategory = req.query.category;

	try {
		//Define the response objects
		let products;

		// if there is "new" query
		if (qNew) {
			//return the newest Products
			products = await Product.find().sort({ createdAt: -1 }).limit(qNew);
		} // if there is "Category" query
		else if (qCategory) {
			//return the Products in that categories
			products = await Product.find({
				categories: {
					$in: [qCategory.trim()]
				}
			});
		} // if there is "Search" query
		else if (qSearch) {
			// search in Products and return the resualt
			products = await Product.find({
				productName: { $regex: qSearch.trim() }
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
		} else {
			//return All Products
			products = await Product.find();
		}

		// set the response
		res.status(200).json(products);
	} catch (err) {
		res.status(500).json(err);
		console.log(err);
	}
});

// GET ALL Categories
router.get('/getCategories', async (req, res) => {
	try {
		let categories = [];
		const product = await Product.find();
		product.forEach((element) => {
			categories = categories.concat(element.categories);
		});
		const result = categories.filter((item, idx) => categories.indexOf(item) === idx);

		res.status(200).json(result);
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET the Number of Pages
router.get('/getNumberOfPages', async (req, res) => {
	try {
		const countDocuments = await Product.countDocuments();
		pages = Math.ceil(countDocuments / 9);
		res.status(200).json(pages);
	} catch (err) {
		res.status(500).json(err);
	}
});

//export the Router
module.exports = router;
