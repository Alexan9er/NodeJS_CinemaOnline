const Role = require("../models/role");

class RoleRepository {
  getRoles() {
    return Role.findAll();
  }
  getCurrentRole(conditions) {
    return Role.findOne({ where: conditions });
  }
}

module.exports = RoleRepository;
