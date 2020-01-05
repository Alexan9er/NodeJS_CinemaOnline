const Joi = require("@hapi/joi").extend(require("@hapi/joi-date"));

module.exports = Joi.object().keys({
  title: Joi.string()
    .min(1)
    .max(200)
    .optional(),

  image: Joi.string()
    .min(1)
    .max(200)
    .optional(),

  description: Joi.string().optional(),

  startDate: Joi.date()
    .min("1974-1-1")
    .format("YYYY-MM-DD")
    .optional(),

  endDate: Joi.date()
    .greater(Joi.ref("startDate"))
    .format("YYYY-MM-DD")
    .optional(),

  tags: Joi.array()
    .items(Joi.number())
    .optional()
});
