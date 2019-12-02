const TagRepository = require("../repositories/tag");

const tagRepository = new TagRepository();

class TagService {
  async createTag(tag) {
    return await tagRepository.create(tag);
  }
}

module.exports = TagService;
