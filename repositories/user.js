const User = require("../models/user");

class UserRepository {
  create(user) {
    return User.create(user);
  }
  getAllUsers() {
    return User.findAll();
  }
}

module.exports = new UserRepository();
