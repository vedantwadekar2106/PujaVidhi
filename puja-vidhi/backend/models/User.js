const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: { type: String, unique: true },
  name: String,
  email: { type: String, unique: true },
  password: String
});

module.exports = mongoose.model("User", schema);