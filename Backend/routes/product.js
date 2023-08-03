const Product = require('../models/Products');
const { countDocuments } = require('../models/Users');

const { verifyTokenAndAdmin } = require('./varifyToken');

const router = require('express').Router();

//CREATE
router.post('/', verifyTokenAndAdmin, async (req, res) => {
	const newProduct = new Product(req.body);

	try {
		const savedProduct = await newProduct.save();
		res.status(200).json(savedProduct);
	} catch (err) {
		res.status(500).json(err);
	}
});

//UPDATE
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body
			},
			{ new: true }
		);
		res.status(200).json(updatedProduct);
	} catch (err) {
		res.status(500).json(err);
	}
});

//DELETE
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
	try {
		await Product.findByIdAndDelete(req.params.id);
		res.status(200).json('Product has been deleted...');
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET PRODUCT
router.get('/find/:id', async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		res.status(200).json(product);
	} catch (err) {
		res.status(500).json(err);
	}
});

//GET ALL PRODUCTS
router.get('/', async (req, res) => {
	const qNew = req.query.new;
	const qSearch = req.query.search;
	const qBestSeller = req.query.bestseller;
	const qPage = req.query.page - 1;
	const qPagesCount = req.query.pagescount;
	try {
		let products;
		let pages;

		if (qNew) {
			products = await Product.find().sort({ createdAt: -1 }).limit(qNew);
		} else if (qSearch) {
			products = await Product.find({
				productName: { $regex: qSearch }
			}).sort({ createdAt: -1 });
		} else if (qBestSeller) {
			products = await Product.find().sort({ best_seller: -1 }).limit(qBestSeller);
		} else if (qPage) {
			products = await Product.find()
				.skip(qPage * 9)
				.limit(9);
		} else if (qPagesCount) {
			const countDocuments = await Product.countDocuments();
			pages = Math.ceil(countDocuments / 9);
		} else {
			products = await Product.find();
		}

		res.status(200).json({ products, pages });
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
