const User = require("../models/user");
const Role = require("../models/role");

const { Op } = require("sequelize");

class UserRepository {
  create(user) {
    return User.create(user);
  }

  getAllUsers(pagination, conditions) {
    const { limit, offset } = pagination;
    const { firstName, lastName } = conditions;

    const whereOptions = {
      firstName: {
        [Op.like]: `%${firstName}%`
      },
      lastName: {
        [Op.like]: `%${lastName}%`
      }
    };

    const sequelizeOptions = {
      include: [
        {
          model: Role,
          attributes: ["id", "title"]
        }
      ],
      where: whereOptions,
      limit,
      offset
    };

    if (!firstName) delete whereOptions.firstName;
    if (!lastName) delete whereOptions.lastName;

    return User.findAll(sequelizeOptions);
  }

  getUser(conditions) {
    return User.findOne({
      where: conditions,
      include: [
        {
          model: Role,
          attributes: ["id", "title"]
        }
      ]
    });
  }
  updateUser(conditions, data) {
    return User.update(data, { where: conditions });
  }
  deleteUser(conditions) {
    return User.destroy({ where: conditions });
  }
}

module.exports = UserRepository;
