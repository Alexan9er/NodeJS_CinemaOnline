const userRoute = require("../routes/user");
const roleRoute = require("../routes/role");

module.exports = app => {
  app.use("/api/users", userRoute);
  app.use("/api/roles", roleRoute);
};
