const router = require("express").Router();
const passport = require("passport");

const AuthController = require("../controllers/auth");
const authController = new AuthController();

const isAuthenticated = require("../middlewares/is-authenticated");

const requestWrap = require("../middlewares/request-wrap");

const validationSchemas = require("../validation-schemas");
const validate = require("../middlewares/validation");

router.post(
  "/login",
  validate({ body: validationSchemas.userLogin }),
  passport.authenticate("local"),
  authController.login
);
router.post(
  "/register",
  validate({ body: validationSchemas.userRegistration }),
  requestWrap(authController.register)
);
router.get("/logout", isAuthenticated, authController.logout);

module.exports = router;
