const userRoute = require("../routes/user");
const roleRoute = require("../routes/role");
const filmRoute = require("../routes/film");

module.exports = app => {
  app.use("/api/users", userRoute);
  app.use("/api/roles", roleRoute);
  app.use("/api/films", filmRoute);
};
