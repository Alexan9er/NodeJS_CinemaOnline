const router = require("express").Router();

const isAuthenticated = require("../middlewares/is-authenticated");
const requestWrap = require("../middlewares/request-wrap");
const validationSchemas = require("../validation-schemas");
const validate = require("../middlewares/validation");

const PasswordController = require("../controllers/password");
const passwordController = new PasswordController();

router.use(isAuthenticated);

router.post("/recover", requestWrap(passwordController.recover));
router.post(
  "/reset/:token",
  validate({
    params: validationSchemas.token,
    body: validationSchemas.resetPassword
  }),
  requestWrap(passwordController.resetPassword)
);

module.exports = router;
