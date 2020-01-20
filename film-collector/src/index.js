const config = require("./config");
const database = require("./database");
const Film = require("./models/film");

const CronJob = require("cron").CronJob;

const Rabbit = require("./classes/rabbit");

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
            Rabbit.sendToQueue(
              config.rabbitMQ.logsQueue,
              `Film with this id (${film.id}) was deleted`
            );
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
