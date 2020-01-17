const mongoose = require("mongoose");
const config = require("./config");

exports.connect = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(config.mongoDB.databaseUrl, {
      useNewUrlParser: true
    });

    mongoose.connection.on("error", err => {
      reject(err);
    });

    mongoose.connection.on("connected", () => {
      resolve();
    });
  });
};
