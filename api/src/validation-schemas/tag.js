const Joi = require("@hapi/joi");

module.exports = Joi.object().keys({
  tag: Joi.string()
    .min(1)
    .max(100)
    .required()
});
