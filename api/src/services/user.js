const UserRepository = require("../repositories/user");
const RoleRepository = require("../repositories/role");

const userRepository = new UserRepository();
const roleRepository = new RoleRepository();

const ValidationError = require("../classes/errors/validation-error");

const helpers = require("../helpers");

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
  async getAllUsers(query) {
    const queryCopy = JSON.parse(JSON.stringify(query));
    const { pagination } = helpers.pagination(queryCopy);

    return await userRepository.getAllUsers(pagination, queryCopy);
  }
  async getUser(userId) {
    return await userRepository.getUser({ id: userId });
  }
  async updateUser(userId, data) {
    return await userRepository.updateUser({ id: userId }, data);
  }

  async deleteUser(userId) {
    const user = await userRepository.getUser({
      id: userId
    });

    if (user) {
      if (user.removeRequest) {
        return await userRepository.deleteUser({ id: userId });
      } else {
        throw new ValidationError(
          "This user has not submitted a removal request.",
          400
        );
      }
    } else {
      throw new ValidationError("This user does not exist.", 400);
    }
  }
}

module.exports = UserService;
