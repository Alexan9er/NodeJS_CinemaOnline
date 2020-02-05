const FilmService = require("../services/film");

const filmService = new FilmService();

class FilmController {
  async getAllFilms(req, res) {
    const options = req.query;
    const films = await filmService.getAllFilms(options);

    res.status(200).send(films);
  }

  async deleteFilm(req, res) {
    const filmId = req.params.id;

    await filmService.deleteFilm(filmId);

    res.sendStatus(200);
  }

  async createFilm(req, res) {
    const filmData = req.body;
    const addedFilm = await filmService.createFilm(filmData);

    res.status(200).send(addedFilm);
  }

  async updateFilm(req, res) {
    const filmId = req.params.id;

    await filmService.updateFilm(filmId, req.body);

    res.status(200).end();
  }
}

module.exports = FilmController;
