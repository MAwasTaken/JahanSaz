const mongoose = require('mongoose');

// PRODUCT DB SCHEMA MODEL
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

// export the model
module.exports = mongoose.model('Products', ProductsSchema);
