const Sequelize = require("sequelize");
const { sequelize } = require("../database");
const crypto = require("crypto");

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
  },
  resetPasswordToken: {
    type: Sequelize.STRING,
    required: false,
    field: "reset_password_token"
  },
  resetPasswordExpires: {
    type: Sequelize.DATE,
    required: false,
    field: "reset_password_expires"
  }
});

User.prototype.validPassword = async function(password) {
  return await hashCompare.compare(password, this.password);
};

User.prototype.generatePasswordReset = function() {
  this.resetPasswordToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordExpires = Date.now() + 3600000; //expires in an hour
};

User.beforeCreate(async user => {
  user.password = await hashCompare.hash(user.password);
});

User.beforeUpdate(async user => {
  if (user.changed("password")) {
    user.password = await hashCompare.hash(user.password);
  }
});

module.exports = User;
