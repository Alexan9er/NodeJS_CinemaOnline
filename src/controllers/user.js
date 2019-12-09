const UserService = require("../services/user");
const userService = new UserService();

class UserController {
  async getAllUsers(req, res) {
    const users = await userService.getAllUsers();

    res.status(200).send(users);
  }

  async getUser(req, res) {
    const userId = req.params.id;
    const user = await userService.getUser(userId);

    res.status(200).send(user);
  }

  async updateUser(req, res) {
    const userId = req.params.id;

    await userService.updateUser(userId, req.body);

    res.status(200).end();
  }
}

module.exports = UserController;
