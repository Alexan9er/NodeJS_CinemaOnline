const Sequelize = require("sequelize");
const db = require("../../config/database");

const Order = db.define("order", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  }
});

module.exports = Order;
