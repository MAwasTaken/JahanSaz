<<<<<<< HEAD
const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    phoneNumber: { type: String, require: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", UsersSchema);
=======
const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
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
>>>>>>> e7ea6bb46797b4c1deefa2e8e31bed8de75ff129
