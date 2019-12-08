class AuthError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "AuthenticationError";
    this.status = status;
  }
}

module.exports = AuthError;
