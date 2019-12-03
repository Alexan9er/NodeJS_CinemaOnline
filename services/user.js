const UserRepository = require("../repositories/user");
const RoleRepository = require("../repositories/role");

const userRepository = new UserRepository();
const roleRepository = new RoleRepository();

const CustomError = require("../helpers/errors");

class UserService {
  async create(user) {
    const role = await roleRepository.getCurrentRole({ title: "user" });
    if (user) {
      const isExist = await userRepository.getCurrentUser({
        email: user.email
      });
      if (!isExist) {
        const newUser = await userRepository.create(user);
        await newUser.addRole(role);

        const addedUser = await userRepository.getCurrentUser({
          id: newUser.id
        });

        return addedUser;
      } else {
        throw new CustomError("This user is already exist!", 400);
      }
    }
  }
  async getAllUsers() {
    return await userRepository.getAllUsers();
  }
  async getCurrentUser(userId) {
    return await userRepository.getCurrentUser({ id: userId });
  }
}

module.exports = UserService;
