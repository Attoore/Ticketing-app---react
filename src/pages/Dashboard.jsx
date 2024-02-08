import EditForm from "../components/EditForm";
import { DeleteIcon, EditIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Heading,
  Text,
  Container,
  Box,
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
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
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import Tablerow from "../components/Tablerow";
import { useState } from "react";
import SearchBar from "../components/SearchBar";

export default function Dashboard({ tickets, users, setTickets, setFetchTicketsTrigger }) {
  // Recieving tickets array state

  //For edit form modal -onOpen to tablerow the two others to editform conponent
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [clickedTicket, setClickedTicket] = useState({});

  return (
    <Card ps="0" ms="0" overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p="6px 0px 22px 0px"></CardHeader>
      <SearchBar setTickets={setTickets} />
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
            {
              // Loop trough tickets and render a tablerow for each + find correct user for each ticket - pass ticket + user info to tablerow component  ---  users.length > 0 && checks that users array is populated if not skip mapping, when data is fetched and array populated -> state changes -> component re-renders now data available

              users.length > 0 &&
                tickets.map((entry) => {
                  const user = users.find((user) => user.username == entry.agent);

                  // incase user of the ticket not found in DB
                  if (!user) {
                    console.log("user not found", entry);
                  }

                  return (
                    <Tablerow
                      ticketObj={entry}
                      userObj={user}
                      key={entry._id}
                      setFetchTicketsTrigger={setFetchTicketsTrigger}
                      onOpen={onOpen} // For edit modal
                      setClickedTicket={setClickedTicket}
                    />
                  );
                })
            }
          </Tbody>
        </Table>
        <EditForm
          tickets={tickets}
          users={users}
          setFetchTicketsTrigger={setFetchTicketsTrigger}
          isOpen={isOpen}
          onClose={onClose}
          clickedTicket={clickedTicket}
        />
      </CardBody>
    </Card>
  );
}
