const Sequelize = require("sequelize");
const { sequelize } = require("../database");

const Tickets = sequelize.define("tickets", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  }
});

module.exports = Tickets;
