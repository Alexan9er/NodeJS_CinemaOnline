const database = require("./database");
const Film = require("./models/film");

const CronJob = require("cron").CronJob;

(async () => {
  try {
    await database.connection();

    const job = new CronJob("59 23 * * *", async () => {
      try {
        const films = await Film.findAll();
        const currentDate = new Date();

        films.forEach(film => {
          const endDate = new Date(film.endDate);

          if (endDate < currentDate) {
            film.destroy();
          }
        });
      } catch (err) {
        throw new Error(err);
      }
    });

    job.start();
  } catch (err) {
    console.log(err);
  }
})();
