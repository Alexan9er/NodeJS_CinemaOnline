class AccessError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "AccessError";
    this.status = status;
  }
}

module.exports = AccessError;
