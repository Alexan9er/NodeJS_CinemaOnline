const Film = require("../models/film");
const Tag = require("../models/tag");

const { Op } = require("sequelize");

class FilmRepository {
  getAllFilms(pagination, conditions, tagsIds) {
    const { limit, offset } = pagination;

    const whereOptions = {
      id: { [Op.in]: tagsIds }
    };

    if (!tagsIds) delete whereOptions.id;

    const sequelizeOptions = {
      where: conditions,
      include: [
        {
          model: Tag,
          attributes: ["id", "tag"],
          where: whereOptions
        }
      ],
      limit,
      offset
    };

    if (!tagsIds) delete sequelizeOptions.include[0].where;

    return Film.findAndCountAll(sequelizeOptions);
  }

  getFilm(conditions) {
    return Film.findOne({
      where: conditions,
      include: [
        {
          model: Tag,
          attributes: ["id", "tag"]
        }
      ]
    });
  }

  updateFilm(conditions, film) {
    return Film.update(film, { where: conditions });
  }

  createFilm(film) {
    return Film.create(film);
  }

  deleteFilm(conditions) {
    return Film.destroy({ where: conditions });
  }
}

module.exports = FilmRepository;
