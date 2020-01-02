const router = require("express").Router();
const requestWrap = require("../middlewares/request-wrap");

const TicketController = require("../controllers/ticket");
const ticketController = new TicketController();

const isAuthenticated = require("../middlewares/is-authorized");

router.use(isAuthenticated);

router.get("/", requestWrap(ticketController.getAllTickets));

router.post("/addTicket", requestWrap(ticketController.addTicket));
router.delete("/deleteTicket", requestWrap(ticketController.deleteTicket));

module.exports = router;
