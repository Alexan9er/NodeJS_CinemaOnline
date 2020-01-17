const app = require("express")();
const loaders = require("./loaders");
const config = require("./config");
const notFound = require("./middlewares/not-found");
const Rabbit = require("./classes/rabbit");

exports.start = () => {
  loaders(app);

  app.use(notFound);

  app.listen(
    config.server.port,
    Rabbit.sendToQueue(
      config.rabbitMQ.logsQueue,
      `Server started on port ${config.server.port}`
    )
  );
};
