const User = require("../models/user");
const Role = require("../models/role");

class UserRepository {
  create(user) {
    return User.create(user);
  }
  getAllUsers() {
    return User.findAll({
      include: [
        {
          model: Role,
          attributes: ["id", "title"]
        }
      ]
    });
  }
  getUser(conditions) {
    return User.findOne({ where: conditions });
  }
}

module.exports = UserRepository;
