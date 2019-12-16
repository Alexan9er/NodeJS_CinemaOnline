const TicketRepository = require("../repositories/ticket");
const UserRepository = require("../repositories/user");
const FilmRepository = require("../repositories/film");

const ticketRepository = new TicketRepository();
const userRepository = new UserRepository();
const filmRepository = new FilmRepository();

class TicketService {
  async getAllTickets() {
    return await ticketRepository.getAllTickets();
  }

  async addTicket(userId, filmId) {
    const user = await userRepository.getUser({ id: userId });
    const film = await filmRepository.getAllFilms({ id: filmId });

    const addedTicket = await user.addFilm(film);

    return addedTicket;
  }

  async deleteTicket(userId, filmId) {
    const user = await userRepository.getUser({ id: userId });
    const film = await filmRepository.getAllFilms({ id: filmId });

    return await user.removeFilm(film);
  }
}

module.exports = TicketService;
