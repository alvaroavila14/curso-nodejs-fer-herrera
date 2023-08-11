const { request, response } = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { generateJWT } = require("../helpers/jwt-generate");

const login = async (req = request, res = response) => {
  const { mail, password } = req.body;

  try {
    //Verify if the mail exists
    const user = await User.findOne({ mail });
    if (!user) {
      return res.status(400).json({
        msg: "User was not found",
      });
    }
    //Verify if the user is active
    if (!user.status) {
      return res.status(400).json({
        msg: "User was found but is not active",
      });
    }
    //Verify if the password is correct
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: "Incorrect password",
      });
    }
    console.log("This is user", user);
    //Generate the JWT
    const token = await generateJWT(user.id);

    res.json({
      ok: "Received",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  login,
};
