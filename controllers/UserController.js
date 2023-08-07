const { response, request } = require("express");

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

const postUser = (req, res) => {
  const { player, club } = req.body;
  res.json({
    ok: true,
    msg: "POST Controller",
    player,
    club: `Biggest club is ${club}`,
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
