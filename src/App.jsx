// layouts and pages
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Create from "./pages/Create";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Grid, GridItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { set } from "mongoose";

// // router and routes
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<Dashboard />} />
//       <Route path="create" element={<Create />} action={createAction} />
//       <Route path="profile" element={<Profile />} />
//     </Route>
//   )
// );

function App() {
  console.log("RENDERED - RootLayout - APP-now");

  // states for fetch triggering using dependacy arrays
  const [fetchTicketsTrigger, setFetchTicketsTrigger] = useState(false);
  const [fetchUsersTrigger, setFetchUsersTrigger] = useState(false);

  //States for Tickets / Users from DB
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  //Fetch the tickets and save to state
  useEffect(
    function () {
      async function getTickets() {
        try {
          const res = await fetch(`http://127.0.0.1:8080/tickets`);
          const tickets = await res.json();
          setTickets(tickets); // Set the state
        } catch (error) {
          console.log(error.message);
        }
      }
      getTickets();
    },
    [fetchTicketsTrigger]
  ); //trigger state inclunded

  //Fetch the Users and save to state
  useEffect(
    function () {
      async function getUsers() {
        try {
          const res = await fetch(`http://127.0.0.1:8080/users`);
          const users = await res.json();
          setUsers(users);
          // console.log(users);
        } catch (error) {
          console.log(error.message);
        }
      }
      getUsers();
    },
    [fetchUsersTrigger]
  );

  // Passing the states & funcs trough Outlet context to Dashboard.jsx & Create.jsx
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem as="aside" colSpan="1" bg="gray.100" minHeight={{ lg: "100vh" }}>
        <Sidebar />
      </GridItem>

      <GridItem as="main" colSpan="5">
        <Navbar />
        <Dashboard
          tickets={tickets}
          users={users}
          setFetchTicketsTrigger={setFetchTicketsTrigger}
        />
        <Create
          setFetchTicketsTrigger={setFetchTicketsTrigger}
          setFetchUsersTrigger={setFetchUsersTrigger}
          users={users}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
