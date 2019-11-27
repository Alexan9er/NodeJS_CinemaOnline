const FilmRepository = require("../repositories/film");

class FilmService {
  async getAllFilms() {
    return await FilmRepository.getAllFilms();
  }
}

module.exports = new FilmService();
