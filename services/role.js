const RoleRepository = require("../repositories/role");

class RoleService {
  async getRoles() {
    return await RoleRepository.getRoles();
  }
}

module.exports = new RoleService();
