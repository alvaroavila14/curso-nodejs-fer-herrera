const { response, request } = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const getUsers = (req = request, res = response) => {
  const { q, nombre, apiKey } = req.query;
  res.json({
    ok: true,
    msg: "GET Controller",
    q,
    nombre,
    apiKey,
  });
};

const putUsers = (req, res) => {
  const id = req.params.id;
  res.json({
    ok: true,
    msg: "PUT Controller",
    id,
  });
};

const postUser = async (req = request, res = response) => {
  const { name, mail, password, role } = req.body;
  const user = new User({ name, mail, password, role });

  //Encrypt the password
  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(password, salt);

  await user.save();

  res.json({
    msg: "POST Controller",
    user,
  });
};

const deleteUser = (req, res) => {
  res.json({
    ok: true,
    msg: "DELETE Controller",
  });
};

const patchUser = (req, res) => {
  res.json({
    ok: true,
    msg: "PATCH Controller",
  });
};

module.exports = {
  getUsers,
  putUsers,
  postUser,
  deleteUser,
  patchUser,
};
