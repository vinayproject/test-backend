// Third Party Dependencies
const Joi = require('joi');

exports.save = async (data) => {
	var schema = Joi.object().keys({
		options: Joi.number().required(),
		questions: Joi.number().required(),
	});
	return await Joi.validate(data, schema);
};
