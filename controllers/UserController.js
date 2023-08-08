const { response, request } = require("express");
const User = require("../models/user");

const getUsers = (req = request, res = response) => {
  const { q, nombre, apiKey = 0 } = req.query;
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

const postUser = async (req, res) => {
  const body = req.body;
  const user = new User(body);
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
