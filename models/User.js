const mongoose = require("mongoose");
const UserShema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 10,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserShema);
