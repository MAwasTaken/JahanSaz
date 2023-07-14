const { number } = require('joi');
const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema(
	{
		productName: { type: String, require: true, unique: true },
		price: { type: Number },
		categories: { type: Array },
		QTY: {
			type: Number,
			required: true,
			validate: {
				validator: function (v) {
					return v >= 0;
				},
				message: (props) => `${props.value} is not a positive number!`
			}
		},
		images: { type: Array },
		description: { type: String },
		size: { type: String },
		best_seller: { type: Number, default: 0 }
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Products', ProductsSchema);
