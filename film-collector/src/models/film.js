const Sequelize = require("sequelize");
const { sequelize } = require("../database");

const Film = sequelize.define("film", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  startDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    field: "start_date",
    validate: {
      notEmpty: true
    }
  },
  endDate: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    field: "end_date",
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Film;
