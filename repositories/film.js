const Film = require("../models/film");

class FilmRepository {
  getAllFilms() {
    return Film.findAll();
  }
}

module.exports = new FilmRepository();
