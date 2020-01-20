const amqp = require("amqplib/callback_api");
const config = require("../config");
const Mailer = require("./mailer");

class Rabbit {
  constructor() {
    this.channel = null;
  }
  start() {
    amqp.connect(config.rabbitMQ.url, (error0, connection) => {
      if (error0) {
        throw error0;
      }
      connection.createChannel((error1, channel) => {
        if (error1) {
          throw error1;
        }

        this.channel = channel;
        const { logsQueue, emailsQueue } = config.rabbitMQ;

        channel.assertQueue(logsQueue, {
          durable: true
        });
        channel.assertQueue(emailsQueue, {
          durable: true
        });

        console.log(
          " [*] Waiting for messages in %s. To exit press CTRL+C",
          logsQueue
        );

        this.channel.consume(emailsQueue, message => {
          const { recipient, emailMessage } = JSON.parse(
            message.content.toString()
          );

          Mailer.sendMail(emailMessage, recipient)
            .then(() => {
              this.sendToLogsQueue(
                `Message to ${recipient} was send successfuly`
              );
            })
            .catch(err => {
              this.sendToLogsQueue(`Mailer has error: ${err}`);
            });
        });
      });
    });
  }

  sendToLogsQueue(message) {
    this.channel.sendToQueue(
      config.rabbitMQ.logsQueue,
      Buffer.from(JSON.stringify(message))
    );
    console.log(` [x] Sent - ${message}`);
  }
}

module.exports = Rabbit;
