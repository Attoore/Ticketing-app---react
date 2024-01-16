import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Grid, GridItem } from "@chakra-ui/react";

export default function RootLayout() {
  console.log("RENDERED - RootLayout");
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem as="aside" colSpan="1" bg="gray.100" minHeight={{ lg: "100vh" }}>
        <Sidebar />
      </GridItem>

      <GridItem as="main" colSpan="5">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
