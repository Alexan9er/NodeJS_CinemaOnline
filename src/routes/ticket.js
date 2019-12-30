const router = require("express").Router();
const requestWrap = require("../middlewares/request-wrap");

const TicketController = require("../controllers/ticket");
const ticketController = new TicketController();

const isAdmin = require("../middlewares/is-admin");
const isAuthenticated = require("../middlewares/is-authorized");

router.get("/", isAuthenticated, requestWrap(ticketController.getAllTickets));

router.post(
  "/addTicket",
  isAuthenticated,
  requestWrap(ticketController.addTicket)
);
router.delete(
  "/deleteTicket",
  isAuthenticated,
  requestWrap(ticketController.deleteTicket)
);

module.exports = router;
