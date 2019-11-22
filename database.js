const Sequelize = require("sequelize");
const {
  databaseName,
  user,
  password,
  otherOptions
} = require("./config/connectionData");

const sequelize = new Sequelize(databaseName, user, password, otherOptions);

exports.sequelize = sequelize;

exports.connection = () =>
  new Promise((resolve, reject) => {
    sequelize
      .authenticate()
      .then(() => {
        console.log("Connection has been established successfully.");
        resolve();
      })
      .catch(err => {
        console.error("Unable to connect to the database:", err);
        reject(err);
      });
  });
