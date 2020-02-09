const ValidationError = require("../classes/errors/validation-error.js");
const multiparty = require("multiparty");

module.exports = (req, res, next) => {
  const form = new multiparty.Form();

  form.parse(req, (err, fields, files) => {
    Object.keys(fields).forEach(field => {
      req.body[field] = fields[field][0];
    });

    if (files.file) {
      req.file = files.file[0];
    } else {
      next(new ValidationError(`There are not any files uploaded`));
    }
    next();
  });
};
