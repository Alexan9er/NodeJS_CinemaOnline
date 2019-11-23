const UserRepository = require("../repositories/user");

class UserService {
  async create(user) {
    return await UserRepository.create(user);
  }
  async getAllUsers() {
    return await UserRepository.getAllUsers();
  }
  async getCurrentUser(userId) {
    return await UserRepository.getCurrentUser({ id: userId });
  }
}

module.exports = new UserService();
