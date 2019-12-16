const Film = require("../models/film");
const Tag = require("../models/tag");

class FilmRepository {
  getAllFilms(conditions) {
    return Film.findAll({
      where: conditions,
      include: [
        {
          model: Tag,
          attributes: ["id", "tag"]
        }
      ]
    });
  }

  // getFilm(conditions) {
  //   return Film.findOne({
  //     where: conditions,
  //     include: [
  //       {
  //         model: Tag,
  //         attributes: ["id", "tag"]
  //       }
  //     ]
  //   });
  // }

  createFilm(film) {
    return Film.create(film);
  }

  deleteFilm(conditions) {
    return Film.destroy({ where: conditions });
  }
}

module.exports = FilmRepository;
