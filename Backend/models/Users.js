const mongoose = require('mongoose');

// USERR DB SCHEMA MODEL
const UsersSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		email: { type: String, unique: true },
		password: { type: String, required: true },
		isAdmin: {
			type: Boolean,
			default: false
		},
		phoneNumber: { type: String, require: true, unique: true }
	},
	{ timestamps: true }
);

// export the model
module.exports = mongoose.model('Users', UsersSchema);
