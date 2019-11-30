const TagService = require("../services/tag");

const tagService = new TagService();

class TagController {
  async createTag(req, res) {
    const tag = await tagService.createTag(req.body);
    res.status(200).send(tag);
  }
}

module.exports = TagController;
