const router = require("express").Router();
const FilmController = require("../controllers/film");

router.get("/", FilmController.getAllFilms);
router.delete("/:id", FilmController.deleteFilm);

module.exports = router;
