const UserService = require("../services/user");

class UserController {
  async getAllUsers(req, res) {
    const users = await UserService.getAllUsers();
    res.status(200).send(users);
  }

  async getCurrentUser(req, res) {
    const userId = req.params.id;
    const user = await UserService.getCurrentUser(userId);
    res.status(200).send(user);
  }

  async register(req, res) {
    const user = await UserService.create(req.body);
    res.status(200).send(user);
  }
}

module.exports = new UserController();
