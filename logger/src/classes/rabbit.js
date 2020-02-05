const amqp = require("amqplib/callback_api");
const config = require("../config");
const Logger = require("./logger");
const constants = require("../config/constants");

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
            const { logType, message: content } = JSON.parse(
              message.content.toString()
            );

            switch (logType) {
              case constants.logTypes.info:
                Logger.writeLog(content);
                break;
              case constants.logTypes.error:
                Logger.writeError(content);
                break;
              default:
                Logger.writeError("Type of log did not find!");
            }
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
