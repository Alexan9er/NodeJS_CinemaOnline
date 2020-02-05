const database = require("./database");
const server = require("./server");
const Models = require("./models");
const config = require("./config");
const Rabbit = require("./classes/rabbit");
const constants = require("./config/constants");

(async () => {
  try {
    await Rabbit.start();
    await database.connection();
    Models();
    server.start();
  } catch (err) {
    Rabbit.sendToQueue(config.rabbitMQ.logsQueue, {
      logType: constants.logTypes.error,
      message: err
    });
  }
})();
