const joi = require('joi');

// USER JOI MODEL  (A model for validation)
const model = joi.object({
	username: joi.string().alphanum().min(3).max(30).required(),

	firstName: joi.string(),

	lastName: joi.string(),

	password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),

	email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'ir', 'net', 'org'] } }),

	isAdmin: joi.boolean(),

	phoneNumber: joi.string().pattern(new RegExp('^09[0|1|2|3][0-9]{8}$'))
});

// export the models
module.exports = model;
