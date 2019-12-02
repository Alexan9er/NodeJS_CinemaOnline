const router = require("express").Router();
const TagController = require("../controllers/tag");

const tagController = new TagController();

router.post("/create", tagController.createTag);

module.exports = router;
