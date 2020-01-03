const Joi = require("@hapi/joi");

module.exports = Joi.object().keys({
  filmId: Joi.number()
    .min(1)
    .required()
});
