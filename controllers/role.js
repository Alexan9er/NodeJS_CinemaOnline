const RoleService = require("../services/role");

const roleService = new RoleService();

class RoleController {
  async getRoles(req, res) {
    const roles = await roleService.getRoles();
    res.status(200).send(roles);
  }
}

module.exports = RoleController;
