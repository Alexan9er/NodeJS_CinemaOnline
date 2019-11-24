const Sequelize = require("sequelize");
const { sequelize } = require("../database");

const FilmsTags = sequelize.define("films_tags", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  }
});

module.exports = FilmsTags;
