import express from "express";
import mongoose from "mongoose";
import User from "./User.js";
import Ticket from "./Ticket.js";

// import cors from "cors"; //**********

const app = express(); // Creates an instance of the Express application.
// app.use(cors()); // tells Express to use the CORS middleware - so can respond to requests from different origins
app.use(express.json()); // so server can parse incoming json from POST requests body

// app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

// Add Espress v5 error handling? - middleware function
app.use((err, req, res, next) => {
  console.error(err.stack);
  // res.status(500).send("Something broke! (database)");
  res.status(500).json("ERROR: Something broke! (database)");
});

//Connecting to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/database1")
  .then(() => {
    console.log("connected to DB");
  })
  .catch((error) => {
    console.log(error.message);
  });

async function createUser() {
  // Async func that creates new user model using the schema

  const user = await User.create({ name: "Mike", role: "admin", pfp: "url" });

  console.log(`User saved`);
  console.log(user);
}
// createUser(); // Call the function

async function createTicket() {
  const ticket = await Ticket.create({
    id: 1234,
    status: "Open",
    agent: "Bob admin",
    title: "title blaa",
    desc: "desc blaa",
  });
  console.log("Ticket saved");
  console.log(ticket);
}
// createTicket();

const port = process.env.PORT || 8080; // Use port deifined in env if not set default to 8080

app.listen(port, () => {
  console.log(`Server is running on port ${port} ( http://localhost:${port}) `);
}); // Starts the server nad listen to a port. Logs msg when succesfully started.
// ----
