import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Button, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <List color="gray.500" fontSize="1.2em" fontWeight="bold" spacing={10} ps="20px">
      <Text>Interface</Text>

      <ListItem>
        <ListIcon as={EditIcon} />
        <NavLink to="/create">Create</NavLink>
      </ListItem>

      <ListItem>
        <ListIcon as={EditIcon} />
        <NavLink to="/">Dashboard</NavLink>
      </ListItem>

      <ListItem>
        <ListIcon as={EditIcon} />
        <NavLink to="/profile">Profile</NavLink>
      </ListItem>
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
