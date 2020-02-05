const amqp = require("amqplib/callback_api");
const config = require("../config");
const Mailer = require("./mailer");

class Rabbit {
  constructor() {
    this._channel = null;
  }

  start() {
    amqp.connect(config.rabbitMQ.url, (connectionError, connection) => {
      if (connectionError) {
        throw connectionError;
      }
      connection.createChannel((channelError, channel) => {
        if (channelError) {
          throw channelError;
        }

        this._channel = channel;
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

        this._channel.consume(emailsQueue, message => {
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
    this._channel.sendToQueue(
      config.rabbitMQ.logsQueue,
      Buffer.from(JSON.stringify(message))
    );
    console.log(` [x] Sent - ${message}`);
  }
}

module.exports = Rabbit;
