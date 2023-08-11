const { request, response } = require("express");

const login = (req = request, res = response) => {
  const { mail, password } = req.body;
  res.json({
    ok: "Received",
    mail,
    password,
  });
};

module.exports = {
  login,
};
