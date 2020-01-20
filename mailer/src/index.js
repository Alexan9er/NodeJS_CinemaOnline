const Mailer = require("./classes/mailer");
const Rabbit = require("./classes/rabbit");

const rabbit = new Rabbit();

(() => {
  Mailer.start();
  rabbit.start();
})();
