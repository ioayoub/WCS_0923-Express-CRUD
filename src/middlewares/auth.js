const auth = (req, res, next) => {
  const isAuthenticated = false;

  if (isAuthenticated) {
    next();
  } else {
    res.status(401).json({
      message: "toto",
    });
  }
};

module.exports = { auth };
