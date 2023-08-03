const mongoose = require('mongoose');

// CARD DB SCHEMA MODEL
const CartSchema = new mongoose.Schema(
	{
		userId: { type: String, required: true },
		products: [
			{
				productId: {
					type: String
				},
				quantity: {
					type: Number,
					default: 500
				}
			}
		]
	},
	{ timestamps: true }
);

// export the model
module.exports = mongoose.model('Cart', CartSchema);
