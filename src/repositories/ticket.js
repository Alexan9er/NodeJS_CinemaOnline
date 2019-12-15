const Ticket = require("../models/tickets");
const Film = require("../models/film");
const User = require("../models/user");

class TicketRepository {
  getAllTickets(conditions) {
    return Ticket.findAll({
      where: conditions,
      include: [
        {
          model: User,
          attributes: ["id", "firstName", "lastName", "email"]
        },
        {
          model: Film,
          attributes: [
            "id",
            "title",
            "image",
            "description",
            "startDate",
            "endDate"
          ]
        }
      ]
    });
  }
}

module.exports = TicketRepository;
