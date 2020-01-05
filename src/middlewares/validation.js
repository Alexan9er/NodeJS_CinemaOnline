const UnprocessableEntityError = require("../classes/errors/unprocessable-entity-error");

const validate = (schema, object) => {
  if (schema) {
    const { error } = schema.validate(object);

    if (error) {
      throw new UnprocessableEntityError(`${error.details[0].message}!`);
    }
  }
};

module.exports = validationObject => {
  return (req, res, next) => {
    validate(validationObject.body, req.body);
    validate(validationObject.params, req.params);
    validate(validationObject.query, req.query);

    next();
  };
};
