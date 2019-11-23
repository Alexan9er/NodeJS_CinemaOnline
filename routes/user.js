const router = require("express").Router();
const UserController = require("../controllers/user");

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getCurrentUser);

module.exports = router;
