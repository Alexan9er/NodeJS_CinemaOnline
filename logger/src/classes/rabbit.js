const amqp = require("amqplib/callback_api");
const config = require("../config");
const Logger = require("./logger");

class Rabbit {
  start() {
    amqp.connect(config.rabbitMQ.url, (connectionError, connection) => {
      if (connectionError) {
        throw connectionError;
      }
      connection.createChannel((channelError, channel) => {
        if (channelError) {
          throw channelError;
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
