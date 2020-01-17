const winston = require("winston");
const Log = require("../models/log");

class Logger {
  constructor() {
    this.logger = null;
  }
  start() {
    this.logger = winston.createLogger({
      transports: [new winston.transports.Console()]
    });
  }
  writeLogs(message) {
    this.logger.info(message);
    Log.create({
      info: message,
      date: new Date()
    });
  }
}

module.exports = new Logger();
