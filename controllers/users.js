const User = require("../db/models/User");
const Role = require("../db/models/Role");
const bcrypt = require("bcryptjs");

module.exports = {
  list(req, res) {
    return User.findAll()
      .then(users => {
        res.status(200).send(users);
      })
      .catch(err => res.sendStatus(400));
  },

  create(req, res) {
    const { fullName, email, password } = req.body;
    // Check required fields
    if (!fullName || !email || !password) {
      return res.status(400).send("Fill all fields");
    }
    // Check passwords length
    if (password.length < 6) {
      return res.status(400).send("Password should be at least 6 characters");
    }

    User.findOne({ where: { email: email } })
      .then(user => {
        if (user) {
          // User exists
          return res.status(400).send("Email is already registered");
        } else {
          const newUser = {
            fullName,
            email,
            password
          };
          // Hash password
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              // Set password to hash
              newUser.password = hash;
              // Save user
              Role.findOne({ where: { role: "user" } })
                .then(role => {
                  if (!role) return console.log("Role not found");

                  role
                    .createUser(newUser)
                    .then(() => res.sendStatus(200))
                    .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
            });
          });
        }
      })
      .catch(err => console.log(err));
  }
};
