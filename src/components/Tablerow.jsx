import { useState, useEffect } from "react";
import { Text, Tr, Th, Td, Avatar, Badge, Button, Flex, IconButton } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

function Tablerow({ ticketObj, userObj, setFetchTicketsTrigger, onOpen }) {
  const colour = {
    Open: "blue.400",
    Pending: "orange.300",
    Resolved: "green.300",
    Closed: "gray.400",
  };

  const formatDate = function (passedDate) {
    const date = new Date(passedDate);

    const day = date.getDate().toString().padStart(2, 0);
    const month = (date.getMonth() + 1).toString().padStart(2, 0);
    const year = date.getFullYear().toString().slice(2);

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

  const handleDelete = async function (id) {
    try {
      const res = await fetch(`http://127.0.0.1:8080/tickets/delete/${id}`);
      const data = await res.json();
      console.log(data);

      // trigger fetching updated ticket list (in dependacy array in App component)
      setFetchTicketsTrigger((prev) => !prev); //toggle true/false
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = async function (ticketObj) {
    try {
      // const res = await fetch(`http://127.0.0.1:8080/tickets/edit/${id}`);
      // const data = await res.json();
      console.log(ticketObj);
      onOpen();

      // trigger fetching updated ticket list (in dependacy array in App component)
      // setFetchTicketsTrigger((prev) => !prev); //toggle true/false
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Tr>
      <Td pl="0px">
        <Flex align="center" minWidth="100%" flexWrap="nowrap">
          <Avatar src={userObj.img} w="50px" borderRadius="12px" me="18px" />
          <Flex direction="column">
            <Text fontSize="sm" fontWeight="bold" minWidth="100%">
              {ticketObj.agent}
            </Text>
            <Text fontSize="sm" color="gray.500" fontWeight="normal">
              {userObj.role}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td>
        <Text fontSize="sm" fontWeight="bold" color="gray.500">
          {ticketObj._id.slice(-5).toString().toUpperCase()}
        </Text>
      </Td>

      <Td>
        <Text fontSize="sm" fontWeight="bold" color="gray.500">
          {ticketObj.title}
        </Text>
      </Td>

      <Td>
        <Text fontSize="sm" fontWeight="bold" pb=".5rem" color="gray.500">
          {formatDate(ticketObj.updatedAt)}
        </Text>
      </Td>

      <Td>
        <Badge
          bg={colour[ticketObj.status]}
          color="white"
          fontSize="12px"
          p="2px 8px"
          borderRadius="8px"
          width="90px"
          textAlign="center"
        >
          {ticketObj.status}
        </Badge>
      </Td>

      <Td>
        <IconButton
          color="gray.500"
          border="none"
          variant="outline"
          aria-label="Edit button"
          icon={<EditIcon />}
          onClick={() => handleEdit(ticketObj)}
        />
        <IconButton
          color="gray.500"
          border="none"
          variant="outline"
          aria-label="Delete button"
          icon={<DeleteIcon />}
          onClick={() => handleDelete(ticketObj._id)}
        />
      </Td>
    </Tr>
  );
}

export default Tablerow;
