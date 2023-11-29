const argon2 = require("argon2");

async function hashPwd(req, res, next) {
  if (!req.body.password) throw new ReferenceError();

  const hashpassword = await argon2.hash(req.body.password);
  req.body.password = hashpassword;

  next();
}

module.exports = { hashPwd };
