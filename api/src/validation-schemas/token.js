const Joi = require("@hapi/joi");

module.exports = Joi.object().keys({
  token: Joi.string().required()
});
