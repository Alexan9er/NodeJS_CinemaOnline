const userController = require("../controllers").users;

module.exports = app => {
  app.get("/api/users", userController.list);
  app.post("/api/users", userController.create);
};
