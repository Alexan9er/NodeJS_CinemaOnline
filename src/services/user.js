const UserRepository = require("../repositories/user");
const RoleRepository = require("../repositories/role");

const userRepository = new UserRepository();
const roleRepository = new RoleRepository();

const ValidationError = require("../classes/errors/validation-error");

class UserService {
  async create(user) {
    const role = await roleRepository.getRole({ title: "user" });

    if (user) {
      const isExist = await userRepository.getUser({
        email: user.email
      });

      if (!isExist) {
        const newUser = await userRepository.create(user);

        await newUser.addRole(role);

        const addedUser = await userRepository.getUser({
          id: newUser.id
        });

        return addedUser;
      } else {
        throw new ValidationError("This user is already exist!", 400);
      }
    }
  }
  async getAllUsers() {
    return await userRepository.getAllUsers();
  }
  async getUser(userId) {
    return await userRepository.getUser({ id: userId });
  }
  async updateUser(userId, data) {
    return await userRepository.updateUser({ id: userId }, data);
  }
}

module.exports = UserService;
