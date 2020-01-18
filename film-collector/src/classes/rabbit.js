const amqp = require("amqplib/callback_api");
const config = require("../config");

class Rabbit {
  constructor() {
    this.channel = null;
  }

  start() {
    return new Promise((resolve, reject) => {
      amqp.connect(config.rabbitMQ.url, (error0, connection) => {
        if (error0) {
          reject(error0);
        }

        connection.createChannel((error1, channel) => {
          if (error1) {
            reject(error1);
          }

          this.channel = channel;
          channel.assertQueue(config.rabbitMQ.logsQueue, {
            durable: true
          });
          resolve();
        });
      });
    });
  }

  sendToQueue(queueName, message) {
    this.channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));
    console.log(` [x] Sent - ${message}`);
  }
}

module.exports = new Rabbit();
