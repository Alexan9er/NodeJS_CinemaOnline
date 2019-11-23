const UserRepository = require("../repositories/user");

class UserService {
  async create(user) {
    return await UserRepository.create(user);
  }
  async getAllUsers() {
    return await UserRepository.getAllUsers();
  }
}

module.exports = new UserService();
