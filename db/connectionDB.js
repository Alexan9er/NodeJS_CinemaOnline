const mysql = require("mysql2/promise");
const sequelize = require("../config/database");
const {
  databaseName,
  host,
  user,
  password
} = require("../config/data/connectionData");

const User = require("./models/User");
const Film = require("./models/Film");
const Role = require("./models/Role");
const Order = require("./models/Order");

mysql
  .createConnection({
    host: host,
    user: user,
    password: password
  })
  .then(connection => {
    connection
      .query(`CREATE DATABASE ${databaseName}`)
      .then(() => {
        console.log(`Database <${databaseName}> created`);
        connection.end();
      })
      .catch(err => {
        console.log(err);
      });
  })
  .catch(err => console.log(err));

Role.hasMany(User, { onDelete: "cascade" });
Film.belongsToMany(User, { through: Order });
User.belongsToMany(Film, { through: Order });

sequelize
  .sync()
  .then(() => {
    console.log("Tables have been created");
  })
  .catch(err => console.log(err));
