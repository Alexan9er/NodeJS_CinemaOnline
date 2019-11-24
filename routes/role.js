const router = require("express").Router();
const RoleController = require("../controllers/role");

router.get("/", RoleController.getRoles);

module.exports = router;
