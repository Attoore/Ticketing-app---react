import { Text, Tr, Th, Td, Avatar, Badge, Button, Flex, IconButton } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

function Tablerow({ ticketObj, userObj }) {
  const colour = {
    Open: "blue.400",
    Pending: "orange.300",
    Resolved: "green.300",
    Closed: "gray.400",
  };
  return (
    <Tr>
      <Td pl="0px">
        <Flex align="center" minWidth="100%" flexWrap="nowrap">
          <Avatar src={ticketObj.img} w="50px" borderRadius="12px" me="18px" />
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
          {/* {ticketObj.date} */}
          date-test
        </Text>
      </Td>

      <Td>
        <Badge
          bg={colour[ticketObj.status]}
          color="white"
          fontSize="12px"
          p="2px 8px"
          borderRadius="8px"
          width="65%"
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
        />
        <IconButton
          color="gray.500"
          border="none"
          variant="outline"
          aria-label="Delete button"
          icon={<DeleteIcon />}
        />
      </Td>
    </Tr>
  );
}

export default Tablerow;
