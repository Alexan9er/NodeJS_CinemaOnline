const User = require("./user");
const Role = require("./role");
const UsersRoles = require("./users_roles");

module.exports = () => {
  Role.belongsToMany(User, { through: UsersRoles });
  User.belongsToMany(
    Role,
    { through: UsersRoles },
    { onDelete: "cascade", onUpdate: "cascade" }
  );
};
