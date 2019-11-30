const UserRepository = require("../repositories/user");
const RoleRepository = require("../repositories/role");

const userRepository = new UserRepository();
const roleRepository = new RoleRepository();

class UserService {
  async create(user) {
    const role = await roleRepository.getCurrentRole({ title: "user" });
    const newUser = await userRepository.create(user);
    const addedUser = await newUser.addRole(role);

    return addedUser;
  }
  async getAllUsers() {
    return await userRepository.getAllUsers();
  }
  async getCurrentUser(userId) {
    return await userRepository.getCurrentUser({ id: userId });
  }
}

module.exports = UserService;
