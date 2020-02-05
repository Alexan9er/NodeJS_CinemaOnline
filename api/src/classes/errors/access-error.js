class AccessError extends Error {
  constructor(message) {
    super(message);
    this.name = "AccessError";
    this.status = 403;
  }
}

module.exports = AccessError;
