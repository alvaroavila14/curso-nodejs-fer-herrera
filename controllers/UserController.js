const { response } = require("express");

const getUsers = (req, res = response) => {
  res.json({
    ok: true,
    msg: "GET Controller",
  });
};

const putUsers = (req, res) => {
  res.json({
    ok: true,
    msg: "PUT Controller",
  });
};

const postUser = (req, res) => {
  const { player, club } = req.body;
  res.json({
    ok: true,
    msg: "POST Controller",
    player,
    club: `Biggest club is ${club1}`,
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
