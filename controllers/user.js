const UserService = require("../services/user");

class UserController {
  async getAllUsers(req, res) {
    const users = await UserService.getAllUsers();
    res.status(200).send(users);
  }
}

module.exports = new UserController();
