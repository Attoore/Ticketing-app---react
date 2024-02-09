import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Button, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <List color="gray.500" fontSize="1.2em" fontWeight="bold" spacing={10} ps="15px" pe="15px">
      <Text>LOGO</Text>
      <Text>INTERFACE</Text>

      <Button variant="ghost" width="100%" height="60px" justifyContent="start" gap="2">
        <ListIcon as={CalendarIcon} boxSize="6" />
        <Text fontSize="xl" color="gray">
          App
        </Text>
      </Button>

      <Button variant="ghost" width="100%" height="60px" justifyContent="start" gap="2">
        <ListIcon as={CalendarIcon} boxSize="6" />
        <Text fontSize="xl" color="gray">
          Profile
        </Text>
      </Button>

      <Button variant="ghost" width="100%" height="60px" justifyContent="start" gap="2">
        <ListIcon as={CalendarIcon} boxSize="6" />
        <Text fontSize="xl" color="gray">
          Create
        </Text>
      </Button>
    </List>
  );
}

{
  /* <ListItem>
        <Button colorScheme="gray" width="100%">
          <ListIcon as={EditIcon} />
          <NavLink to="/profile">Profile</NavLink>
        </Button>
      </ListItem>

      <ListItem backgroundColor="white">
        <ListIcon as={CalendarIcon} color="white" />
        <NavLink to="/">Dashboard</NavLink>
      </ListItem> */
}
