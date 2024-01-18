import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Grid, GridItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { set } from "mongoose";

export default function RootLayout() {
  // console.log("RENDERED - RootLayout");

  //States for Tickets / Users from DB
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  //Fetch the tickets and save to state
  useEffect(function () {
    async function getTickets() {
      const res = await fetch(`http://127.0.0.1:8080/tickets`);
      const tickets = await res.json();
      setTickets(tickets);
      // console.log(users);
    }
    getTickets();
  }, []);
  // useEffect(function () {
  //   async function getTickets() {
  //     const res = await fetch(`./data/db.json`);
  //     const data = await res.json();

  //     //Setting result data into ticket variable
  //     setTickets(data);
  //   }

  //   // Calling the async function above
  //   getTickets();
  // }, []); // [] = runs only on initial mount
  // console.log(tickets.map((entry) => console.log(entry)));

  //Fetch the Users and save to state
  useEffect(function () {
    async function getUsers() {
      const res = await fetch(`http://127.0.0.1:8080/users`);
      const users = await res.json();
      setUsers(users);
      // console.log(users);
    }
    getUsers();
  }, []);

  // Passing the state trough Outlet context to Dashboard.jsx & Create.jsx
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem as="aside" colSpan="1" bg="gray.100" minHeight={{ lg: "100vh" }}>
        <Sidebar />
      </GridItem>

      <GridItem as="main" colSpan="5">
        <Navbar />
        <Outlet context={{ tickets, setTickets, users, setUsers }} />
      </GridItem>
    </Grid>
  );
}
