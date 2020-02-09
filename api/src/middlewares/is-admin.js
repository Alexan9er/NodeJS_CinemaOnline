const AccessError = require("../classes/errors/access-error");

const helpers = require("../helpers");

module.exports = (req, res, next) => {
  const { roles } = req.user;

  const isAdmin = helpers.isAdmin(roles);

  if (!isAdmin) {
    next(
      new AccessError(
        "You do not have enough permission to perform this action"
      )
    );
  }
  return next();
};
