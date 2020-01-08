const errorHandler = require("../middlewares/error-handler");

module.exports = app => {
  app.use(errorHandler);
};
