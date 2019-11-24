const RoleService = require("../services/role");

class RoleController {
  async getRoles(req, res) {
    const roles = await RoleService.getRoles();
    res.status(200).send(roles);
  }
}

module.exports = new RoleController();
