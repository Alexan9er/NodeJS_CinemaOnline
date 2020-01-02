const TicketService = require("../services/ticket");

const ticketService = new TicketService();

class TicketController {
  async getAllTickets(req, res) {
    const options = req.query;
    const user = req.user;

    const tickets = await ticketService.getAllTickets(options, user);

    res.status(200).send(tickets);
  }

  ц

  async deleteTicket(req, res) {
    const userId = req.user.id;
    const filmId = req.body.filmId;

    await ticketService.deleteTicket(userId, filmId);

    res.sendStatus(200);
  }
}

module.exports = TicketController;
