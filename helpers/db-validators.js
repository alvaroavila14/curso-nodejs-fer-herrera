const Role = require("../models/role");
const User = require("../models/user");

const isValidRole = async (role) => {
  //Verify if the role exists
  const isValidRole = await Role.findOne({ role });
  if (!isValidRole) {
    throw new Error(`Role ${role} is not valid`);
  }
};

const isMailRegistered = async (mail) => {
  //Verify if the mail exists
  const userExists = await User.findOne({ mail });
  if (userExists) {
    throw new Error(`Mail is already registered`);
  }
};

const isValidUser = async (id) => {
  const isUserRegistered = await User.findById(id);
  if (!isUserRegistered) {
    throw new Error(`User with ID: ${id} is not registered`);
  }
};

module.exports = {
  isValidRole,
  isMailRegistered,
  isValidUser,
};
