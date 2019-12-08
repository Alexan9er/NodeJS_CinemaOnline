const AuthError = require("../classes/errors/auth-error");
const AccessError = require("../classes/errors/access-error");

module.exports = (req, res, next) => {
  if (req.user) {
    const rolesArray = req.user.roles;
    let isAdmin = false;

    rolesArray.forEach(role => {
      if (role.title === "admin") {
        isAdmin = true;
      }
    });

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
