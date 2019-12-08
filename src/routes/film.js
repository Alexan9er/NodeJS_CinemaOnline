const router = require("express").Router();
const isAdmin = require("../middlewares/is-admin");
const requestWrap = require("../middlewares/request-wrap");

const FilmController = require("../controllers/film");
const filmController = new FilmController();

router.get("/", filmController.getAllFilms);
router.delete("/:id", filmController.deleteFilm);
router.post("/create", isAdmin, requestWrap(filmController.createFilm));

module.exports = router;
