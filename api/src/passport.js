const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const ValidationError = require("./classes/errors/validation-error");

const UserRepository = require("./repositories/user");
const userRepository = new UserRepository();

passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    async (email, password, done) => {
      const user = await userRepository.getUser({ email });

      if (user) {
        const passwordIsValid = await user.validPassword(password);

        if (passwordIsValid) {
          return done(null, user);
        } else {
          return done(
            new ValidationError("Email or password is incorrect!", 401)
          );
        }
      } else {
        return done(
          new ValidationError("Email or password is incorrect!", 401)
        );
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await userRepository.getUser({ id });
  done(null, user);
});

module.exports = passport;
