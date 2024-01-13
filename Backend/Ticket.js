import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    id: Number,
    status: String,
    agent: String,
    title: String,
    desc: String,
  },
  { timestamps: true }
);

export default mongoose.model("Ticket", ticketSchema);
