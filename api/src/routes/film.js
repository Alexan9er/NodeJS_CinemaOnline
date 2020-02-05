const router = require("express").Router();
const isAdmin = require("../middlewares/is-admin");
const requestWrap = require("../middlewares/request-wrap");

const FilmController = require("../controllers/film");
const filmController = new FilmController();

const validationSchemas = require("../validation-schemas");
const validate = require("../middlewares/validation");

const isAuthenticated = require("../middlewares/is-authenticated");

router.use(isAuthenticated);

router.get("/", filmController.getAllFilms);
router.delete(
  "/:id",
  validate({ params: validationSchemas.id }),
  isAdmin,
  requestWrap(filmController.deleteFilm)
);
router.post(
  "/",
  validate({
    body: validationSchemas.filmCreate
  }),
  isAdmin,
  requestWrap(filmController.createFilm)
);
router.put(
  "/:id",
  validate({
    params: validationSchemas.id,
    body: validationSchemas.filmUpdate
  }),
  isAdmin,
  requestWrap(filmController.updateFilm)
);

module.exports = router;
