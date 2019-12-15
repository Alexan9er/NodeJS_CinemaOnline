const TicketRepository = require("../repositories/ticket");

const ticketRepository = new TicketRepository();

class TicketService {
  async getAllTickets() {
    return await ticketRepository.getAllTickets();
  }
}

module.exports = TicketService;
