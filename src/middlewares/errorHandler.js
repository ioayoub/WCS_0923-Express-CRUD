const { SQLGenericError } = require("../errors/SQLGenericError");

function errorHandler(err, req, res, next) {
  console.log("ERROR IS HERE");
  console.log(err);

  if (err instanceof SQLGenericError) {
    // Creer un fichier de log
    res.status(503).json({
      message: "This is an SQL GENERIC ERROR",
    });
  }

  res.json({
    message: "Your app is broken",
  });
}

module.exports = { errorHandler };
