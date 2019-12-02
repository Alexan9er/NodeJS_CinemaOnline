const session = require("express-session");
const passport = require("../passport");

module.exports = app => {
  app
    .use(
      session({
        secret: "secret",
        resave: true,
        saveUninitialized: true,
        cookie: { maxAge: 24 * 60 * 60 * 1000 }
      })
    )
    .use(passport.initialize())
    .use(passport.session());
};
