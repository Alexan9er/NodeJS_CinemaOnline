const FilmRepository = require("../repositories/film");
const TagRepository = require("../repositories/tag");

const filmRepository = new FilmRepository();
const tagRepository = new TagRepository();

class FilmService {
  async getAllFilms() {
    return await filmRepository.getAllFilms();
  }

  async createFilm(film) {
    const newFilm = await filmRepository.createFilm(film);

    if (film.tags) {
      const tags = await tagRepository.getTagsByIds(film.tags);
      await newFilm.setTags(tags);
    }
    return newFilm;
  }

  async deleteFilm(filmId) {
    return await filmRepository.deleteFilm({ id: filmId });
  }
}

module.exports = FilmService;
