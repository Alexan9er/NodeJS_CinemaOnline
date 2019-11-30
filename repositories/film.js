const Film = require("../models/film");

class FilmRepository {
  getAllFilms() {
    return Film.findAll();
  }

  createFilm(film) {
    return Film.create(film);
  }

  deleteFilm(conditions) {
    return Film.destroy({ where: conditions });
  }
}

module.exports = FilmRepository;
