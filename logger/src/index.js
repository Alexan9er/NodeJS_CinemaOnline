const database = require("./database");
const Logger = require("./classes/logger");
const Rabbit = require("./classes/rabbit");

const rabbit = new Rabbit();

(async () => {
  Logger.start();

  database
    .connect()
    .then(() => {
      Logger.writeLogs(`Connected to DataBase`);
      rabbit.start();
    })
    .catch(err => {
      Logger.writeLogs(err);
    });
})();
