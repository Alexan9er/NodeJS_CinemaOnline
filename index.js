const database = require("./database");
const server = require("./server");

(async () => {
  try {
    await database.connection();
    server.start();
  } catch (err) {
    console.log(err);
  }
})();
