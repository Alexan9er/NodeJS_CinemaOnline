const winston = require("winston");
const { ErrorLog, InfoLog } = require("../models");

// TODO type of info
class Logger {
  constructor() {
    this._logger = null;
  }
  start() {
    this._logger = winston.createLogger({
      transports: [new winston.transports.Console()]
    });
  }

  writeLog(message) {
    this._logger.info(message);
    InfoLog.create({
      info: message,
      date: new Date()
    });
  }

  writeError(message) {
    this._logger.error(message);
    ErrorLog.create({
      info: message,
      date: new Date()
    });
  }
}

module.exports = new Logger();
