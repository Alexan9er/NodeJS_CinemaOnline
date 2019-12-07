const Sequelize = require("sequelize");
const { sequelize } = require("../database");

const HashCompare = require("../classes/hash-and-compare");
const hashCompare = new HashCompare();

const User = sequelize.define("user", {
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
});

User.prototype.validPassword = async function(password) {
  return await hashCompare.compare(password, this.password);
};

User.beforeCreate(async user => {
  user.password = await hashCompare.hash(user.password);
});

module.exports = User;
