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

  removeRequest: Joi.boolean().optional()
});
