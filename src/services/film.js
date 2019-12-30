const FilmRepository = require("../repositories/film");
const TagRepository = require("../repositories/tag");

const filmRepository = new FilmRepository();
const tagRepository = new TagRepository();

const helpers = require("../helpers");

class FilmService {
  async getAllFilms(query) {
    const queryCopy = JSON.parse(JSON.stringify(query));
    const { pagination } = helpers.pagination(queryCopy);
    const tags = helpers.splitOptions(queryCopy, "tags");

    return await filmRepository.getAllFilms(pagination, queryCopy, tags);
  }

  async createFilm(film) {
    const newFilm = await filmRepository.createFilm(film);

    if (film.tags) {
      const tags = await tagRepository.getTagsByIds(film.tags);
      await newFilm.setTags(tags);
    }
    return newFilm;
  }

  async updateFilm(filmId, filmData) {
    const film = await filmRepository.getFilm({ id: filmId });

    if (filmData.tags) {
      const tags = await tagRepository.getTagsByIds(filmData.tags);

      await film.setTags(tags);
    }

    return await filmRepository.updateFilm({ id: filmId }, filmData);
  }

  async deleteFilm(filmId) {
    return await filmRepository.deleteFilm({ id: filmId });
  }
}

module.exports = FilmService;
