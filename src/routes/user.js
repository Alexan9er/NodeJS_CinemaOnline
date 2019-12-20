const router = require("express").Router();
const requestWrap = require("../middlewares/request-wrap");

const isAdmin = require("../middlewares/is-admin");
const isAuthenticated = require("../middlewares/is-authorized");

const UserController = require("../controllers/user");
const userController = new UserController();
// isAdmin,
router.get("/", requestWrap(userController.getAllUsers));
router.get("/:id", requestWrap(userController.getUser));
router.put("/", isAuthenticated, requestWrap(userController.updateUser));
router.delete("/:id", isAdmin, requestWrap(userController.deleteUser));

module.exports = router;
