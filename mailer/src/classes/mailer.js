const nodemailer = require("nodemailer");

class Mailer {
  constructor() {
    this.transport = null;
  }

  start() {
    this.transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "12445f07f0e579",
        pass: "fa427d3026094b"
      }
    });
  }

  sendMail(message, recipient) {
    return new Promise((resolve, reject) => {
      const emailMessage = {
        from: "elonmusk@tesla.com",
        to: recipient,
        subject: "Design Your Model S | Tesla",
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

module.exports = Mailer;
