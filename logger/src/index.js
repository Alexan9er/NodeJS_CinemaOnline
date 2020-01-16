const database = require("./database");
const Logger = require("./classes/logger");

(async () => {
  try {
    Logger.start();
    await database.connect();
  } catch (err) {
    console.log(err);
  }
})();
