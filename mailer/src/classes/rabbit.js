const amqp = require("amqplib/callback_api");
const config = require("../config");

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

        const { logsQueue } = config.rabbitMQ;

        channel.assertQueue(logsQueue, {
          durable: true
        });

        console.log(
          " [*] Waiting for messages in %s. To exit press CTRL+C",
          logsQueue
        );

        channel.consume(
          logsQueue,
          message => {
            Logger.writeLogs(message.content.toString());
          },
          {
            noAck: true
          }
        );
      });
    });
  }
}

module.exports = Rabbit;
