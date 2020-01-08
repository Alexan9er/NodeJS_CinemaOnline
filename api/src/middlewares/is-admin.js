const AuthError = require("../classes/errors/auth-error");
const AccessError = require("../classes/errors/access-error");

const helpers = require("../helpers");

module.exports = (req, res, next) => {
  if (req.user) {
    const { roles } = req.user;

    const isAdmin = helpers.checkRole(roles);

    if (!isAdmin) {
      next(
        new AccessError(
          "You do not have enough permission to perform this action",
          403
        )
      );
    }

    next();
  } else {
    next(new AuthError("You are not authenticated!", 401));
  }
};
