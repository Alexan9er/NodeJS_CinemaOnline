const router = require("express").Router();
const isAdmin = require("../middlewares/is-admin");

const TagController = require("../controllers/tag");
const tagController = new TagController();

const validationSchemas = require("../validation-schemas");
const validate = require("../middlewares/validation");

router.post(
  "/",
  validate({ body: validationSchemas.tag }),
  isAdmin,
  tagController.createTag
);

module.exports = router;
