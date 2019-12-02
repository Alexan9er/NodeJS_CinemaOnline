const UserService = require("../services/user");

const userService = new UserService();

class UserController {
  async getAllUsers(req, res) {
    const users = await userService.getAllUsers();
    res.status(200).send(users);
  }

  async getCurrentUser(req, res) {
    const userId = req.params.id;
    const user = await userService.getCurrentUser(userId);
    res.status(200).send(user);
  }

  async register(req, res) {
    const user = await userService.create(req.body);
    res.status(200).send(user);
  }

  async login(req, res) {
    res.status(200).send(req.user);
  }

  async logout(req, res) {
    req.logout();
    res.status(204).end();
  }
}

module.exports = UserController;
