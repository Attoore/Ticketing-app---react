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
  // Recieving states/functions trough outlet context
  const { setFetchTrigger } = useOutletContext();

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
            <Select name="agent">
              <option value="Mario Admin">Mario Admin</option>
              <option value="John User">John User</option>
              <option value="Mike User">Mike User</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Status</FormLabel>
            <Select name="status">
              <option value="Open">Open</option>
              <option value="Pending">Pending</option>
              <option value="Resolved">Resolved</option>
              <option value="Closed">Closed</option>
            </Select>
          </FormControl>
        </Flex>

        <FormControl isRequired mb="40px">
          <FormLabel>Description:</FormLabel>
          <Textarea placeholder="Enter a description..." name="desc" />
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
  //request obj from react router
  const data = await request.formData();

  //Extracting values from form fields into a ticket object
  const ticket = {
    title: data.get("title"),
    agent: data.get("agent"),
    status: data.get("status"),
    desc: data.get("desc"),
  };

  //Post request to the server using ticket object
  try {
    const response = await fetch(`http://127.0.0.1:8080/tickets`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(ticket),
    });

    const ticketData = await response.json();
    // console.log(ticketData)
    // trigger fetching updated ticket list (in dependacy array in Rootlayout component)
    // setFetchTrigger((prev) => !prev); //toggle true/false
  } catch (error) {
    console.log(error.message);
  }

  return redirect("/"); //Redirects user to dashboard after submit
};

//HOW TO TRIGGER RE-FETCH AFTER REDIRECT
// 1- cant use fetchtrigger inside func that has the redirect
// 2- redirect causes remount of Dashboard, but refetch useEffect on rootlayout (not remounted)
// 3- move useEffect to dashbord? How will create/profile access states?
