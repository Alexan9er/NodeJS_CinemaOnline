const Sequelize = require("sequelize");
const { sequelize } = require("../database");

const UsersRoles = sequelize.define("users_roles", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  }
});

module.exports = UsersRoles;
