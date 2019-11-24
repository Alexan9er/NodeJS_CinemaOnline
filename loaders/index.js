const initExpress = require("./express");
const initRoutes = require("./routes");

module.exports = app => {
  initExpress(app);
  initRoutes(app);
};
