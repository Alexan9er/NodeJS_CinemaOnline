class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    this.status = 404;
  }
}

module.exports = ValidationError;
