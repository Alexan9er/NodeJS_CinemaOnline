const nodemailer = require("nodemailer");
const constants = require("../config/constants");

class Mailer {
  constructor() {
    this.transport = null;
  }

  start() {
    this.transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: constants.email.user,
        pass: constants.email.password
      }
    });
  }

  sendMail(message, recipient) {
    return new Promise((resolve, reject) => {
      const emailMessage = {
        from: constants.email.from,
        to: recipient,
        subject: constants.email.subject,
        html: message
      };

      this.transport.sendMail(emailMessage, (err, info) => {
        if (err) {
          reject(err);
        } else {
          resolve(info);
        }
      });
    });
  }
}

module.exports = new Mailer();
