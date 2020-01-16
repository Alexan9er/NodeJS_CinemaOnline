const database = require("./database");

(async () => {
  try {
    await database.connect();
  } catch (err) {
    console.log(err);
  }
})();
