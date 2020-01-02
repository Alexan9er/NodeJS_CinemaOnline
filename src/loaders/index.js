const initExpress = require("./express");
const initRoutes = require("./routes");
const initSession = require("./session");
const initError = require("./errors");

module.exports = app => {
  initExpress(app);
  initSession(app);
  initRoutes(app);
  initError(app);
};
