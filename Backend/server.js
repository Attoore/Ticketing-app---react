import express from "express";
import cors from "cors"; //**********
import mongoose from "mongoose";
import User from "./User.js";
import Ticket from "./Ticket.js";
// import cors from "cors"; //**********

const app = express(); // Creates an instance of the Express application.
app.use(cors()); // tells Express to use the CORS middleware - so can respond to requests from different origins
app.use(express.json()); // so server can parse incoming json from POST requests body

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

// Add Espress v5 error handling? - middleware function
app.use((err, req, res, next) => {
  console.error(err.stack);
  // res.status(500).send("Something broke! (database)");
  res.status(500).json("ERROR: Something broke! (database)");
});

// !green ---------MongoDB database functions -START -----------

//---Connecting to the MongoDB databse
mongoose
  .connect("mongodb://127.0.0.1:27017/database1")
  .then(() => {
    console.log("connected to DB");
  })
  .catch((error) => {
    console.log(error.message);
  });

//!yellow--------------Find a Ticket ---------------
async function findTicket(targetId) {
  try {
    const ticket = await Ticket.findById(`${targetId}`);
    console.log(ticket);

    const day = ticket.updatedAt.getDate().toString().padStart(2, 0);
    const month = (ticket.updatedAt.getMonth() + 1).toString().padStart(2, 0);
    const year = ticket.updatedAt.getFullYear().toString().slice(2);

    console.log(`${day}/${month}/${year}`);
  } catch (error) {
    console.log(error.message);
  }
}
// findTicket("65a4f87b02b612f5851647a7");

//!yellow--------------Fetch all Tickets ---------------
export async function fetchAllTickets() {
  try {
    const tickets = await Ticket.find();
    console.log(tickets);
  } catch (error) {
    console.log(error.message);
  }
}
// fetchAllTickets();

//!yellow--------------Fetch all Users ---------------
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.json(users);
  } catch (error) {
    res.send(error.message);
    console.log(error.message);
  }
});

// export async function fetchAllUsers() {
//   try {
//     const users = await User.find();
//     console.log(users);
//     return users;
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// // fetchAllUsers();

//!yellow--------------CREATE a user ---------------
async function createUser() {
  // Async func that creates new user model using the schema
  try {
    const user = await User.create({
      name: "Mario Admin",
      role: "admin",
      img: "url",
    });
    console.log(`User saved`);
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}
// createUser();

//!yellow--------------DELETE a User ---------------
async function deleteUser(targetId) {
  try {
    const user = await User.deleteOne({ _id: `${targetId}` });
    console.log(user); // to get conformation in console
  } catch (error) {
    console.log(error.message);
  }
}
// deleteUser("65a29460142b0d1523a93470");

//!yellow--------------CREATE a Ticket ---------------
async function createTicket() {
  try {
    const ticket = await Ticket.create({
      id: 1234,
      status: "Open",
      agent: "Bob admin",
      title: "title blaa",
      desc: "desc blaa",
    });
    console.log("Ticket saved");
    console.log(ticket);
  } catch (error) {
    console.log(error.message);
  }
}
// createTicket();

//!yellow--------------UPDATE a Ticket ---------------
async function updateTicket(targetId) {
  try {
    const ticket = await Ticket.findById(`${targetId}`);
    ticket.status = "Resolved";
    await ticket.save();
    console.log(ticket);
  } catch (error) {
    console.log(error.message);
  }
}
// updateTicket("65a4f87b02b612f5851647a7");

//!yellow--------------DELETE a Ticket ---------------
async function deleteTicket(targetId) {
  try {
    const ticket = await Ticket.deleteOne({ _id: `${targetId}` });
    console.log(ticket);
  } catch (error) {
    console.log(error.message);
  }
}
// deleteTicket("65a2987d4210bc6fd232de99");

// !green ---------MongoDB database functions - END -----------

const port = process.env.PORT || 8080; // Use port deifined in env if not set default to 8080

app.listen(port, () => {
  console.log(`Server is running on port ${port} ( http://localhost:${port}) `);
}); // Starts the server nad listen to a port. Logs msg when succesfully started.
// ----
