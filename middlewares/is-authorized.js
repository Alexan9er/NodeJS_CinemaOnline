const CustomError = require("../helpers/errors");

module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    throw new CustomError("You are not authenticated!", 400);
  }
};
