const router = require("express").Router();
const FilmController = require("../controllers/film");

router.get("/", FilmController.getAllFilms);

module.exports = router;
