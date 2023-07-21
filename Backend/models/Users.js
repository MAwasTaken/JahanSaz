const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		firstname: {type : String , required: true},
		lastName: {type : String , required: true},
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

module.exports = mongoose.model('Users', UsersSchema);
