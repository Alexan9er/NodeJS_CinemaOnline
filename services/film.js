const FilmRepository = require("../repositories/film");

class FilmService {
  async getAllFilms() {
    return await FilmRepository.getAllFilms();
  }

  async deleteFilm(filmId) {
    return await FilmRepository.deleteFilm({ id: filmId });
  }
}

module.exports = new FilmService();
