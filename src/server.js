const app = require("express")();
const loaders = require("./loaders");

const config = require("./config");

const notFound = require("./middlewares/not-found");

exports.start = () => {
  loaders(app);

  app.use(notFound);

  app.listen(
    config.server.port,
    console.log(`Server started on port ${config.server.port}`)
  );
};
