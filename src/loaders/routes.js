const userRoute = require("../routes/user");
const roleRoute = require("../routes/role");
const filmRoute = require("../routes/film");
const tagRoute = require("../routes/tag");
const authRoute = require("../routes/auth");

module.exports = app => {
  app.use(authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/roles", roleRoute);
  app.use("/api/films", filmRoute);
  app.use("/api/tags", tagRoute);
};
