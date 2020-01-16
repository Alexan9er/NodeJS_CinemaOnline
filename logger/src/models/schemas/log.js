const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema({
  info: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = logSchema;
