import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { Form, redirect, useOutletContext } from "react-router-dom";

export default function Create() {
  // Recieving tickets array state trough outlet context
  const { tickets, setTickets } = useOutletContext();

  return (
    <Box maxW="720px" bg="white" ms="20px" p="15px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="30px">
          <FormLabel> Title</FormLabel>
          <Input type="text" name="title" />
          {/* <FormHelperText> Enter a descriptibe task name.</FormHelperText> */}
        </FormControl>

        <Flex mb="30px">
          <FormControl isRequired>
            <FormLabel>Agent</FormLabel>
            <Select>
              <option value="Agent1">Agent 1</option>
              <option value="Agent2">Agent 2</option>
              <option value="Agent3">Agent 3</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Status</FormLabel>
            <Select>
              <option value="Open">Open</option>
              <option value="Pending">Pending</option>
              <option value="Resolved">Resolved</option>
              <option value="Closed">Closed</option>
            </Select>
          </FormControl>
        </Flex>

        <FormControl isRequired mb="40px">
          <FormLabel>Description:</FormLabel>
          <Textarea placeholder="Enter a description..." name="description" />
        </FormControl>

        {/* <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox size="lg" colorScheme="purple" name="isPriority" />
          <FormLabel mb="0" ml="10px">
            Make this priority task.
          </FormLabel>
        </FormControl> */}

        <Button type="submit">Submit</Button>
      </Form>
    </Box>
  );
}

export const createAction = async function ({ request }) {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("isPriority") === "",
  };

  console.log(task);

  return redirect("/"); //Reditects user to dashboard after submit
};
