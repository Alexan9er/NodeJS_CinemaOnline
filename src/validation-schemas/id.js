const Joi = require("@hapi/joi");

module.exports = Joi.object().keys({
  id: Joi.number()
    .min(1)
    .required()
});
