const database = require("./database");
const server = require("./server");
const Models = require("./models");

(async () => {
  try {
    await database.connection();
    Models();
    server.start();
  } catch (err) {
    console.log(err);
  }
})();
