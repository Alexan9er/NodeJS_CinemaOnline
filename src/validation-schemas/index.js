const id = require("./id.js");

const userUpdate = require("./user-update");
const userLogin = require("./user-login");
const userRegistration = require("./user-registration");

const filmUpdate = require("./film-update");
const filmCreate = require("./film-create");

const tag = require("./tag");

module.exports = {
  id,
  userUpdate,
  userLogin,
  userRegistration,
  filmUpdate,
  filmCreate,
  tag
};
