const router = require("express").Router();
const requestWrap = require("../middlewares/request-wrap");

const isAdmin = require("../middlewares/is-admin");
const isAuthenticated = require("../middlewares/is-authenticated");

const UserController = require("../controllers/user");
const userController = new UserController();

const validationSchemas = require("../validation-schemas");
const validate = require("../middlewares/validation");

router.get("/", isAdmin, requestWrap(userController.getAllUsers));
router.get(
  "/:id",
  validate({ params: validationSchemas.id }),
  requestWrap(userController.getUser)
);
router.put(
  "/",
  isAuthenticated,
  validate({ body: validationSchemas.userUpdate }),
  requestWrap(userController.updateUser)
);
router.delete(
  "/:id",
  isAdmin,
  validate({ params: validationSchemas.id }),
  requestWrap(userController.deleteUser)
);

module.exports = router;
