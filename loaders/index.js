const initExpress = require("./express");
const initRoutes = require("./routes");
const initSession = require("./session");

module.exports = app => {
  initExpress(app);
  initSession(app);
  initRoutes(app);
};
