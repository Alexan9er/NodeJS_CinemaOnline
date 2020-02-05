const bcrypt = require("bcryptjs");

class Hash {
  constructor() {
    this.saltCount = 10;
  }

  generate(password) {
    const hashedPassword = new Promise((resolve, reject) => {
      bcrypt
        .hash(password, this.saltCount)
        .then(hash => resolve(hash))
        .catch(err => reject(err));
    });
    return hashedPassword;
  }

  compare(password, hash) {
    const isCompare = new Promise((resolve, reject) => {
      bcrypt
        .compare(password, hash)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });

    return isCompare;
  }
}

module.exports = Hash;
