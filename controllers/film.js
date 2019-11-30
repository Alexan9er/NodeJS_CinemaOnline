const FilmService = require("../services/film");

const filmService = new FilmService();

class FilmController {
  async getAllFilms(req, res) {
    const films = await filmService.getAllFilms();
    res.status(200).send(films);
  }

  async deleteFilm(req, res) {
    const filmId = req.params.id;
    await filmService.deleteFilm(filmId);
    res.sendStatus(200);
  }
}

module.exports = FilmController;
