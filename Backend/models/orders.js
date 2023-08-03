const mongoose = require('mongoose');

// ORDER DB SCHEMA MODEL
const OrdersSchema = new mongoose.Schema(
	{
		userId: { type: String, required: true },
		products: [
			{
				productId: {
					type: String
				},
				quantity: {
					type: Number,
					default: 1
				}
			}
		],
		totalPrice: { type: Number, required: true },
		address: { type: Object, required: true },
		status: { type: String, default: 'pending' }
	},
	{ timestamps: true }
);

// export the model
module.exports = mongoose.model('Orders', OrdersSchema);
