const winston = require("winston");

class Logger {
  constructor() {
    this.logger = null;
  }
  start() {
    this.logger = winston.createLogger({
      transports: [new winston.transports.Console()]
    });
  }
  sendLogs(message) {
    this.logger.info(message);
  }
}

module.exports = new Logger();
