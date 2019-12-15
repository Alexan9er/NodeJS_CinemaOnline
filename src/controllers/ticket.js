const TicketService = require("../services/ticket");

const ticketService = new TicketService();

class TicketController {
  async getAllTickets(req, res) {
    const tickets = await ticketService.getAllTickets();

    res.status(200).send(tickets);
  }
}

module.exports = TicketController;
