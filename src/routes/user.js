const router = require("express").Router();
const requestWrap = require("../middlewares/request-wrap");
const isAdmin = require("../middlewares/is-admin");

const UserController = require("../controllers/user");
const userController = new UserController();

router.get("/", isAdmin, requestWrap(userController.getAllUsers));
router.get("/:id", requestWrap(userController.getUser));
router.put("/:id", requestWrap(userController.updateUser));
router.delete("/:id", isAdmin, requestWrap(userController.deleteUser));

module.exports = router;
