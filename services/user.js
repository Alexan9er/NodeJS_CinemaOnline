const UserRepository = require("../repositories/user");
const RoleRepository = require("../repositories/role");

class UserService {
  async create(user) {
    const role = await RoleRepository.getCurrentRole({ title: "user" });
    const newUser = await UserRepository.create(user);
    const addedUser = await newUser.addRole(role);

    return addedUser;
  }
  async getAllUsers() {
    return await UserRepository.getAllUsers();
  }
  async getCurrentUser(userId) {
    return await UserRepository.getCurrentUser({ id: userId });
  }
}

module.exports = new UserService();
