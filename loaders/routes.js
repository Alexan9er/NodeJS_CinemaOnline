const userRoute = require("../routes/user");

module.exports = app => {
  app.use("/api/users", userRoute);
};
