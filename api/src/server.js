const app = require("express")();
const loaders = require("./loaders");
const config = require("./config");
const notFound = require("./middlewares/not-found");
const Rabbit = require("./classes/rabbit");
const constants = require("./config/constants");

exports.start = () => {
  loaders(app);

  app.use(notFound);

  app.listen(
    config.server.port,
    Rabbit.sendToQueue(config.rabbitMQ.logsQueue, {
      logType: constants.logTypes.info,
      message: `Server started on port ${config.server.port}`
    })
  );
};
