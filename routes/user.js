const router = require("express").Router();
const passport = require("passport");

const UserController = require("../controllers/user");
const userController = new UserController();

const isAuthenticated = require("../middlewares/is-authorized");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);

router.post("/login", passport.authenticate("local"), userController.login);
router.post("/register", userController.register);
router.post("/logout", isAuthenticated, userController.logout);

module.exports = router;
