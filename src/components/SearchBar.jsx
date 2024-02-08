import { SearchIcon } from "@chakra-ui/icons";
import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

function SearchBar({ setTickets }) {
  // SetTickets from app component to render only matched tickets
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async function (e) {
    e.preventDefault();

    // Fetch matching tickets
    try {
      const response = await fetch(`http://127.0.0.1:8080/tickets/${searchTerm}`);

      const matchingTickets = await response.json();

      //   console.log(matchingTickets);

      // Set global ticket state to matched  tickets only
      setTickets(matchingTickets);
    } catch (error) {
      console.log(error.message);
    }

    // Reset the searchbar afet submit
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup width="280px" ms="auto" me="10%">
        <Input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search..."
        />
        <InputRightElement>
          <IconButton type="submit">
            <SearchIcon color="gray.500" />
          </IconButton>
        </InputRightElement>
      </InputGroup>
    </form>
  );
}

export default SearchBar;
