const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter valid and unique email"],
      unique: [true, "Please enter unique email"],
    },
    password: {
      type: String,
      required: [true, "Please enter a password with 8 character length"],
    },
  },
  {
    timestamps: true,
  }
);
const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
