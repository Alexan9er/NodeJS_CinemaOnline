const router = require("express").Router();
const requestWrap = require("../middlewares/request-wrap");
const isAdmin = require("../middlewares/is-admin");

const UserController = require("../controllers/user");
const userController = new UserController();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);
router.put("/:id", requestWrap(userController.updateUser));
router.delete("/:id", isAdmin, requestWrap(userController.deleteUser));

module.exports = router;
