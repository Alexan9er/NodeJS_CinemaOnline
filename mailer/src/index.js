const Mailer = require("./classes/mailer");

const mailer = new Mailer();

(() => {
  mailer.start();
})();
