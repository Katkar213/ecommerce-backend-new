const jwt = require("jsonwebtoken");
const secrete_key = "ketan";
const auth = (req, res, next) => {
  const BearerToken = req.headers["authorization"];

  if (BearerToken) {
    const token = BearerToken.split(" ")[1];
    const validate = jwt.verify(token, secrete_key);
    if (validate) {
      next();
    }
    return res.send({ msg: "user not authorized" });
  }
  return res.send({ msg: "user not allowed" });
};

module.exports = auth;