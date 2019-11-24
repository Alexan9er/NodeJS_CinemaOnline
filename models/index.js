const User = require("./user");
const Role = require("./role");
const Film = require("./film");
const Tag = require("./tag");

const FilmsTags = require("./films_tags");
const UsersRoles = require("./users_roles");
const Tickets = require("./tickets");

module.exports = () => {
  Role.belongsToMany(User, { through: UsersRoles });
  User.belongsToMany(
    Role,
    { through: UsersRoles },
    { onDelete: "cascade", onUpdate: "cascade" }
  );
  Film.belongsToMany(
    Tag,
    { through: FilmsTags },
    { onDelete: "cascade", onUpdate: "cascade" }
  );
  Tag.belongsToMany(
    Film,
    { through: FilmsTags },
    { onDelete: "cascade", onUpdate: "cascade" }
  );
  Film.belongsToMany(
    User,
    { through: Tickets },
    { onDelete: "cascade", onUpdate: "cascade" }
  );
  User.belongsToMany(
    Film,
    { through: Tickets },
    { onDelete: "cascade", onUpdate: "cascade" }
  );
};
