const { response, request } = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const getUsers = async (req = request, res = response) => {
  //Reading the query params sent through the link
  const { limit = 5, from = 0 } = req.query;
  //Setting the custom queries to search only users who are active
  const query = { status: true };
  //! REPLACED DIRECTLY TO PROMISE ALL: Get the total users count
  // const totalCount = User.countDocuments(query);
  //! REPLACED DIRECTLY TO PROMISE ALL: Get users, with the custom query and the pagination from/limit
  // const users = User.find(query).skip(Number(from)).limit(Number(limit));
  //? This is a Promise.all, so it will wait for all the promises to be resolved before returning the result. This is a good practice. I'm also destructuring the result of the Promise.all to get the total and the users data.
  const [totalCount, users] = await Promise.all([
    User.countDocuments(query),
    User.find(query).skip(Number(from)).limit(Number(limit)),
  ]);

  res.json({
    totalCount,
    users,
  });
};

const putUsers = async (req, res) => {
  const { id } = req.params;
  const { password, google, ...rest } = req.body;

  if (password) {
    //Encrypt the password
    const salt = bcrypt.genSaltSync();
    rest.password = bcrypt.hashSync(password, salt);
  }

  const user = await User.findByIdAndUpdate(id, rest);

  res.json({
    ok: true,
    msg: "PUT Controller",
    user,
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
