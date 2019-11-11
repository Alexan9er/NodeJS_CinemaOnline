const Sequelize = require("sequelize");
const db = require("../../config/database");

const User = db.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  avatar: {
    type: Sequelize.STRING,
    defaultValue:
      "https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg",
    allowNull: false,
    validate: {
      isUrl: true,
      notEmpty: true
    }
  },
  fullName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      isLowercase: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  removeRequest: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
});

module.exports = User;
