const router = require("express").Router();
const requestWrap = require("../middlewares/request-wrap");

const TicketController = require("../controllers/ticket");
const ticketController = new TicketController();

const isAuthenticated = require("../middlewares/is-authorized");

const validationSchemas = require("../validation-schemas");
const validate = require("../middlewares/validation");

router.use(isAuthenticated);

router.get("/", requestWrap(ticketController.getAllTickets));

router.post(
  "/addTicket",
  validate({ body: validationSchemas.ticketAddDelete }),
  requestWrap(ticketController.addTicket)
);
router.delete(
  "/deleteTicket",
  validate({ body: validationSchemas.ticketAddDelete }),
  requestWrap(ticketController.deleteTicket)
);

module.exports = router;
