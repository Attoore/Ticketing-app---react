import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Heading,
  Text,
  Container,
  Box,
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Card,
  CardHeader,
  CardBody,
  useColorModeValue,
  Avatar,
  Badge,
  Button,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Tablerow from "../components/Tablerow";
import { useOutletContext } from "react-router-dom";

export default function Dashboard() {
  // Recieving tickets array state trough outlet context
  const { tickets, setTickets } = useOutletContext();
  // console.log(tickets);
  // console.log(setTickets);
  return (
    <Card ps="0" ms="0" overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p="6px 0px 22px 0px">
        {/* <Text fontSize="xl" fontWeight="bold">
          Authors Table
        </Text> */}
      </CardHeader>
      <CardBody>
        <Table variant="simple" colorScheme="purple">
          <Thead>
            <Tr>
              <Th ps="0">Agent</Th>
              <Th>ID</Th>
              <Th>Title</Th>
              <Th>Updated</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tickets.map((entry) => (
              <Tablerow ticketObj={entry} key={entry.id} />
            ))}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
}

// const boxStyles = {
//   padding: "10px",
//   bg: "green",
//   color: "white",
//   m: "10px",
//   textAlign: "center",
//   ":hover": {
//     color: "black",
//     bg: "yellow.200",
//   },
// };

// <div>
//     <Container as="section" maxWidth="4xl" py="20px">
//       <Heading>Chakra heading</Heading>
//       <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, asperiores.</Text>

//       <Box sx={boxStyles}>Olaa como estas</Box>
//     </Container>
//   </div>

{
  /* <SimpleGrid p="10px" spacing={10} minChildWidth="250px">
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
    </SimpleGrid> */
}
