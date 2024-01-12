import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  role: String,
  pfp: String,
});

module.exports = mongoose.model("user", userSchema);
