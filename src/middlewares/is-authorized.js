const AuthError = require("../classes/errors/auth-error");

module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    throw new AuthError("You are not authenticated!", 400);
  }
};
