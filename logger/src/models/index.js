const mongoose = require("mongoose");
const logSchema = require("./schemas/log");

const InfoLog = mongoose.model("Log", logSchema);
const ErrorLog = mongoose.model("Error", logSchema);

module.exports = { InfoLog, ErrorLog };
