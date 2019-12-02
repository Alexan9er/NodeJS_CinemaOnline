const Tag = require("../models/tag");

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class TagRepository {
  create(tag) {
    return Tag.create(tag);
  }

  getTagsByIds(tagsIds) {
    return Tag.findAll({
      where: {
        id: { [Op.in]: tagsIds }
      }
    });
  }
}

module.exports = TagRepository;
