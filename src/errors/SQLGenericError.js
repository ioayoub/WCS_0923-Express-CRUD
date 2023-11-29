class SQLGenericError extends Error {
  constructor() {
    super();

    this.statusCode = 500;
    this.message = "An error occured with SQL";
  }
}

module.exports = { SQLGenericError };
