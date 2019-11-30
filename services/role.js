const RoleRepository = require("../repositories/role");

const roleRepository = new RoleRepository();

class RoleService {
  async getRoles() {
    return await roleRepository.getRoles();
  }
}

module.exports = RoleService;
