const Sequelize = require("sequelize");
const {
  databaseName,
  user,
  password,
  otherOptions
} = require("./data/connectionData");

const sequelize = new Sequelize(databaseName, user, password, otherOptions);

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch(err => console.error("Unable to connect to the database:", err));

module.exports = sequelize;
