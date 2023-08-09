const Role = require("../models/role");
const User = require("../models/user");

const isValidRole = async (role) => {
  //Verify if the role exists
  const isValidRole = await Role.findOne({ role });
  if (!isValidRole) {
  }
};

const isMailRegistered = async (mail) => {
  //Verify if the mail exists
  const userExists = await User.findOne({ mail });
  if (userExists) {
    throw new Error(`Mail is already registered`);
  }
};

module.exports = {
  isValidRole,
  isMailRegistered,
};
