const FilmService = require("../services/film");

class FilmController {
  async getAllFilms(req, res) {
    const films = await FilmService.getAllFilms();
    res.status(200).send(films);
  }

  async deleteFilm(req, res) {
    const filmId = req.params.id;
    await FilmService.deleteFilm(filmId);
    res.sendStatus(200);
  }
}

module.exports = new FilmController();
