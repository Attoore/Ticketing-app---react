import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  role: String,
  img: String,
});

export default mongoose.model("User", userSchema);
