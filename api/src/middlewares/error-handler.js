const Rabbit = require("../classes/rabbit");
const config = require("../config");
const constants = require("../config/constants");

module.exports = (err, req, res, next) => {
  Rabbit.sendToQueue(config.rabbitMQ.logsQueue, {
    logType: constants.logTypes.error,
    message: `Something went wrong! Error: ${err.message}`
  });
  res.status(err.status ? err.status : 500).send({ message: err.message });
};
