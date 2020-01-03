const Joi = require("@hapi/joi");

module.exports = Joi.object().keys({
  firstName: Joi.string()
    .min(1)
    .max(20)
    .optional()
    .regex(/^[a-zA-Z]+$/),

  lastName: Joi.string()
    .min(1)
    .max(20)
    .optional()
    .regex(/^[a-zA-Z]+$/),

  email: Joi.string()
    .email()
    .required(),

  password: Joi.string()
    .min(6)
    .max(20)
    .required()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
});
