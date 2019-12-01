const Film = require("../models/film");
const Tag = require("../models/tag");

class FilmRepository {
  getAllFilms() {
    return Film.findAll({
      include: [
        {
          model: Tag,
          attributes: ["id", "tag"]
        }
      ]
    });
  }

  createFilm(film) {
    return Film.create(film);
  }

  deleteFilm(conditions) {
    return Film.destroy({ where: conditions });
  }
}

module.exports = FilmRepository;
