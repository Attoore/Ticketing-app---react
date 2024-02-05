import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String,
  img: String,
});

export default mongoose.model("User", userSchema);
