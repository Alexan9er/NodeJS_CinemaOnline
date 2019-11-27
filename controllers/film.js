const FilmService = require("../services/film");

class FilmController {
  async getAllFilms(req, res) {
    const films = await FilmService.getAllFilms();
    res.status(200).send(films);
  }
}

module.exports = new FilmController();
