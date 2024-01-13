import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  role: String,
  pfp: String,
});

export default mongoose.model("User", userSchema);
