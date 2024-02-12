import { AtSignIcon, CalendarIcon, EditIcon, Icon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  HiAdjustments,
  HiUser,
  HiClipboardList,
  HiCog,
  HiChartBar,
  HiBeaker,
} from "react-icons/hi";
import { List, ListIcon, ListItem, Button, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [activeButton, setActiveButton] = useState("btn-app");
  const handleClick = function (id) {
    // console.log(id);
    setActiveButton(id);
  };

  const active = { shadow: "base", colorScheme: "green", bg: "white" };

  return (
    <List color="gray.500" fontSize="1.2em" fontWeight="bold" spacing={10} ps="15px" pe="15px">
      <Text>LOGO</Text>
      <Text>INTERFACE</Text>

      <Button
        id="btn-app"
        variant="ghost"
        width="100%"
        height="60px"
        justifyContent="start"
        gap="2"
        onClick={(e) => handleClick("btn-app")}
        {...(activeButton === "btn-app" && active)} // = ...active if true and "false" if false
      >
        <ListIcon as={HiChartBar} boxSize="6" />
        <Text fontSize="xl" color="gray">
          App
        </Text>

        {activeButton === "btn-app" && <ChevronRightIcon width="28px" height="28px" ms="auto" />}
      </Button>

      <Button
        id="btn-profile"
        variant="ghost"
        width="100%"
        height="60px"
        justifyContent="start"
        gap="2"
        onClick={(e) => handleClick("btn-profile")}
        {...(activeButton === "btn-profile" && active)}
      >
        <ListIcon as={HiUser} boxSize="6" />
        <Text fontSize="xl" color="gray">
          Profile
        </Text>

        {activeButton === "btn-profile" && (
          <ChevronRightIcon width="28px" height="28px" ms="auto" />
        )}
      </Button>

      <Button
        id="btn-create"
        variant="ghost"
        width="100%"
        height="60px"
        justifyContent="start"
        gap="2"
        onClick={(e) => handleClick("btn-create")}
        {...(activeButton === "btn-create" && active)}
      >
        <ListIcon as={HiBeaker} boxSize="6" />
        <Text fontSize="xl" color="gray">
          Create
        </Text>

        {activeButton === "btn-create" && <ChevronRightIcon width="28px" height="28px" ms="auto" />}
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
