const User = require("../models/user");

class UserRepository {
  create(user) {
    return User.create(user);
  }
  getAllUsers() {
    return User.findAll();
  }
  getCurrentUser(conditions) {
    return User.findOne({ where: conditions });
  }
}

module.exports = UserRepository;
