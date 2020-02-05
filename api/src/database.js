const Sequelize = require("sequelize");
const config = require("./config");
const Rabbit = require("./classes/rabbit");
const constants = require("./config/constants");

const sequelize = new Sequelize(
  config.database.name,
  config.database.user,
  config.database.password,
  config.database.otherOptions
);

exports.sequelize = sequelize;

exports.connection = () =>
  new Promise((resolve, reject) => {
    sequelize
      .authenticate()
      .then(() => {
        Rabbit.sendToQueue(config.rabbitMQ.logsQueue, {
          logType: constants.logTypes.info,
          message: `Connection has been established successfully.`
        });
        sequelize.sync({ logging: false });
        resolve();
      })
      .catch(err => {
        Rabbit.sendToQueue(config.rabbitMQ.logsQueue, {
          logType: constants.logTypes.error,
          message: `Unable to connect to the database: ${err}`
        });
        reject(err);
      });
  });
