const router = require("express").Router();

const UserController = require("../controllers/user");
const userController = new UserController();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);

module.exports = router;
