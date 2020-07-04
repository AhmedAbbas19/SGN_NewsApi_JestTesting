const mongoose = require("mongoose");
const { jwtSecret } = require("../../config");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");

let realUser = {
  _id: new mongoose.Types.ObjectId(),
  sources: ["marca"],
  fullName: "Ahmeddabbas",
  email: "ahmed@gmail.com",
  password: "123456789aA@",
};
let token = jwt.sign({ id: realUser._id }, jwtSecret);

const setupDatabase = async () => {
  await User.deleteMany();
  await new User(realUser).save();
};

module.exports = {
  realUser,
  token,
  setupDatabase,
};
