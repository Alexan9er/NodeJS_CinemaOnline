const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const CustomError = require("./helpers/errors");

const UserRepository = require("./repositories/user");
const userRepository = new UserRepository();

passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    async (email, password, done) => {
      const user = await userRepository.getCurrentUser({ email });

      if (user) {
        const passwordIsValid = await user.validPassword(password);

        if (passwordIsValid) {
          return done(null, user);
        } else {
          return done(new CustomError("Email or password is incorrect!", 401));
        }
      } else {
        return done(new CustomError("Email or password is incorrect!", 401));
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await userRepository.getCurrentUser({ id });
  done(null, user);
});

module.exports = passport;
