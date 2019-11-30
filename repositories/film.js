const Film = require("../models/film");

class FilmRepository {
  getAllFilms() {
    return Film.findAll();
  }

  deleteFilm(conditions) {
    return Film.destroy({ where: conditions });
  }
}

module.exports = FilmRepository;
