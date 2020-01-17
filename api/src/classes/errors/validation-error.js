class ValidationError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "ValidationError";
    this.status = status;
  }
}

module.exports = ValidationError;
