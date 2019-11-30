const FilmRepository = require("../repositories/film");

const filmRepository = new FilmRepository();

class FilmService {
  async getAllFilms() {
    return await filmRepository.getAllFilms();
  }

  async deleteFilm(filmId) {
    return await filmRepository.deleteFilm({ id: filmId });
  }
}

module.exports = FilmService;
