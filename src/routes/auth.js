const router = require("express").Router();
const passport = require("passport");

const AuthController = require("../controllers/auth");
const authController = new AuthController();

const isAuthenticated = require("../middlewares/is-authorized");

router.post("/login", passport.authenticate("local"), authController.login);
router.post("/register", authController.register);
router.get("/logout", isAuthenticated, authController.logout);

module.exports = router;
