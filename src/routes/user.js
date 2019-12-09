const router = require("express").Router();
const requestWrap = require("../middlewares/request-wrap");

const UserController = require("../controllers/user");
const userController = new UserController();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);
router.put("/:id", requestWrap(userController.updateUser));

module.exports = router;
