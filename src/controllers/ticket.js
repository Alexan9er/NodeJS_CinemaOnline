const TicketService = require("../services/ticket");

const ticketService = new TicketService();

class TicketController {
  async getAllTickets(req, res) {
    const options = req.query;

    const tickets = await ticketService.getAllTickets(options);

    res.status(200).send(tickets);
  }

  async addTicket(req, res) {
    const userId = req.user.id;
    const filmId = req.body.filmId;

    const ticket = await ticketService.addTicket(userId, filmId);

    res.status(200).send(ticket);
  }

  async deleteTicket(req, res) {
    const userId = req.user.id;
    const filmId = req.body.filmId;

    await ticketService.deleteTicket(userId, filmId);

    res.sendStatus(200);
  }
}

module.exports = TicketController;
