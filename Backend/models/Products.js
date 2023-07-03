<<<<<<< HEAD
const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    productName: { type: String, require: true },
    price: { type: Number },
    categories: { type: Array },
    images: { type: Array },
    description: { type: String },
    size: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", ProductsSchema);
=======
const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema(
	{
		productName: { type: String, require: true },
		price: { type: Number },
		categories: { type: Array },
		images: { type: Array },
		description: { type: String },
		size: { type: String }
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Products', ProductsSchema);
>>>>>>> e7ea6bb46797b4c1deefa2e8e31bed8de75ff129
