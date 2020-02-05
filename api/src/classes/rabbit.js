const amqp = require("amqplib/callback_api");
const config = require("../config");

class Rabbit {
  constructor() {
    this._channel = null;
  }

  start() {
    return new Promise((resolve, reject) => {
      amqp.connect(config.rabbitMQ.url, (connectionError, connection) => {
        if (connectionError) {
          reject(connectionError);
        }

        connection.createChannel((channelError, channel) => {
          if (channelError) {
            reject(channelError);
          }

          this._channel = channel;
          channel.assertQueue(config.rabbitMQ.logsQueue, {
            durable: true
          });
          channel.assertQueue(config.rabbitMQ.emailsQueue, {
            durable: true
          });
          resolve();
        });
      });
    });
  }

  sendToQueue(queueName, message) {
    this._channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));
    console.log(` [x] Sent - ${message}`);
  }
}

module.exports = new Rabbit();
