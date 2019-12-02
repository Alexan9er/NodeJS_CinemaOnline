const Sequelize = require("sequelize");
const { sequelize } = require("../database");
const bcrypt = require("bcryptjs");

const User = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "first_name",
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "last_name",
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true
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
      field: "remove_request",
      allowNull: false
    }
  },
  {
    hooks: {
      beforeCreate: async function(user) {
        const salt = await bcrypt.genSalt(10); //whatever number you want
        user.password = await bcrypt.hash(user.password, salt);
      }
    }
  }
);

User.prototype.validPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = User;
