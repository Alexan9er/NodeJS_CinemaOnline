const TicketRepository = require("../repositories/ticket");
const UserRepository = require("../repositories/user");
const FilmRepository = require("../repositories/film");

const ticketRepository = new TicketRepository();
const userRepository = new UserRepository();
const filmRepository = new FilmRepository();

const helpers = require("../helpers");

class TicketService {
  async getAllTickets(options, user) {
    const { pagination } = helpers.pagination(options);
    const { roles } = user;

    const isAdmin = helpers.checkRole(roles);

    if (!isAdmin) {
      return await ticketRepository.getTicketsForUser(
        pagination,
        options,
        user.id
      );
    } else {
      return await ticketRepository.getAllTickets(pagination, options);
    }
  }

  async addTicket(userId, filmId) {
    const user = await userRepository.getUser({ id: userId });
    const film = await filmRepository.getFilm({ id: filmId });

    const addedTicket = await user.addFilm(film);

    return addedTicket;
  }

  async deleteTicket(userId, filmId) {
    const user = await userRepository.getUser({ id: userId });
    const film = await filmRepository.getFilm({ id: filmId });

    return await user.removeFilm(film);
  }
}

module.exports = TicketService;
