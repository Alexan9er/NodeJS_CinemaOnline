const UserService = require("../services/user");
const userService = new UserService();

const CustomError = require("../helpers/errors");

class UserController {
  async register(req, res, next) {
    try {
      const user = await userService.create(req.body);
      res.status(200).send(user);
    } catch (err) {
      next(new CustomError(err, 500));
    }
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
