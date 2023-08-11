const jwt = require("jsonwebtoken");

const validateJWT = (req = request, res = response, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      msg: "Unauthorized request: No token was sent",
    });
  }
  try {
    console.log(token);
    // const { uid } = jwt.verify(token, process.env.SECRET_KEY);
    const { uid } = jwt.verify(token, process.env.SECRET_KEY);
    // req.uid = uid;
    console.log(uid);
    next();
  } catch (error) {
    return res.status(401).json({
      msg: "Token no válido",
    });
  }
};

module.exports = {
  validateJWT,
};
