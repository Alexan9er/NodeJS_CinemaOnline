const Joi = require("@hapi/joi").extend(require("@hapi/joi-date"));

module.exports = Joi.object().keys({
  title: Joi.string()
    .min(1)
    .max(200)
    .required(),

  image: Joi.string()
    .min(1)
    .max(200)
    .required(),

  description: Joi.string().optional(),

  startDate: Joi.date()
    .min("1974-1-1")
    .format("YYYY-MM-DD")
    .required(),

  endDate: Joi.date()
    .greater(Joi.ref("startDate"))
    .format("YYYY-MM-DD")
    .required(),

  tags: Joi.array()
    .items(Joi.number())
    .optional()
});
