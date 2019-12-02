const router = require("express").Router();
const passport = require("passport");

const UserController = require("../controllers/user");
const userController = new UserController();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getCurrentUser);

router.post("/login", passport.authenticate("local"), userController.login);
router.post("/register", userController.register);

module.exports = router;
