const router = require("express").Router();
const RoleController = require("../controllers/role");

const roleController = new RoleController();

router.get("/", roleController.getRoles);

module.exports = router;
