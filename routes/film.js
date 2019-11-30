const router = require("express").Router();
const FilmController = require("../controllers/film");

const filmController = new FilmController();

router.get("/", filmController.getAllFilms);
router.delete("/:id", filmController.deleteFilm);

module.exports = router;
