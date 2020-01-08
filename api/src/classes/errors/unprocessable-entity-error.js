class UnprocessableEntityError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnprocessableEntityError";
    this.status = 422;
  }
}

module.exports = UnprocessableEntityError;
