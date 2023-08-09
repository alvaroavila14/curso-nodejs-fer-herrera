const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  mail: {
    type: String,
    unique: true,
    required: [true, "Mail is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    enum: ["ADMIN_ROLE", "USER_ROLE"],
  },
  status: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

//Below there's a method used to remove the visualization of __v and password fields
UserSchema.methods.toJSON = function () {
  const { __v, password, ...user } = this.toObject();
  return user;
};

module.exports = model("User", UserSchema);
