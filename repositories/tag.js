const Tag = require("../models/tag");

class TagRepository {
  create(tag) {
    return Tag.create(tag);
  }
}

module.exports = TagRepository;
