const AuthError = require("../classes/errors/auth-error");
const AccessError = require("../classes/errors/access-error");

const helpers = require("../helpers");

// TODO delete checking on the user auth
module.exports = (req, res, next) => {
  if (req.user) {
    const { roles } = req.user;

    const isAdmin = helpers.isAdmin(roles);

    if (!isAdmin) {
      next(
        new AccessError(
          "You do not have enough permission to perform this action"
        )
      );
    }

    next();
  } else {
    next(new AuthError("You are not authenticated!"));
  }
};
