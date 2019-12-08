const router = require("express").Router();
const passport = require("passport");

const AuthController = require("../controllers/auth");
const authController = new AuthController();

const isAuthenticated = require("../middlewares/is-authorized");

const requestWrap = require("../middlewares/request-wrap");

router.post("/login", passport.authenticate("local"), authController.login);
router.post("/register", requestWrap(authController.register));
router.get("/logout", isAuthenticated, authController.logout);

module.exports = router;
