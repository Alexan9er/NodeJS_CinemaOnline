const Role = require("../models/role");

class RoleRepository {
  getRoles() {
    return Role.findAll();
  }
  getRole(conditions) {
    return Role.findOne({ where: conditions });
  }
}

module.exports = RoleRepository;
