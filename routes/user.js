const router = require("express").Router();
const UserController = require("../controllers/user");

router.get("/", UserController.getAllUsers);

module.exports = router;
