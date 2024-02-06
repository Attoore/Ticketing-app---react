import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  useColorModeValue,
  Avatar,
  Badge,
  Button,
  Flex,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";

export default function EditForm({
  tickets,
  users,
  setFetchTicketsTrigger,
  isOpen,
  onOpen,
  onClose,
  clickedTicket,
}) {
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Ticket</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik // Using Formik library for the form
              initialValues={{
                //Providing initial values for fields - select fields need value to not be empty if untouched
                title: clickedTicket.title,
                agent: clickedTicket.agent,
                status: clickedTicket.status,
                desc: clickedTicket.desc,
              }}
              onSubmit={async function (values, { resetForm }) {
                //Values from formik
                const ticket = {
                  // Extracting field values into ticket object
                  title: values.title,
                  agent: values.agent,
                  status: values.status,
                  desc: values.desc,
                };
                // Post request to the server using ticket object
                try {
                  const response = await fetch(
                    `http://127.0.0.1:8080/tickets/edit/${clickedTicket._id}`,
                    {
                      method: "POST",
                      headers: { "content-type": "application/json" },
                      body: JSON.stringify(ticket),
                    }
                  );
                  const ticketData = await response.json();
                  console.log(ticketData);
                  // trigger fetching updated ticket list (in dependacy array in Rootlayout component)
                  setFetchTicketsTrigger((prev) => !prev); //toggle true/false
                } catch (error) {
                  console.log(error.message);
                }
                resetForm();
              }}
            >
              {(
                { handleSubmit, errors, touched } //These from formik
              ) => (
                <form onSubmit={handleSubmit}>
                  <FormControl isRequired mb="30px">
                    <FormLabel> Title</FormLabel>
                    <Field as={Input} type="text" name="title" />
                  </FormControl>
                  <Flex mb="30px">
                    <FormControl isRequired>
                      <FormLabel>Agent</FormLabel>
                      <Field as={Select} name="agent">
                        {users.map((entry) => (
                          <option key={entry.username} value={entry.username}>
                            {entry.username}
                          </option>
                        ))}
                      </Field>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Status</FormLabel>
                      <Field as={Select} name="status">
                        <option value="Open">Open</option>
                        <option value="Pending">Pending</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Closed">Closed</option>
                      </Field>
                    </FormControl>
                  </Flex>
                  <FormControl isRequired mb="40px">
                    <FormLabel>Description:</FormLabel>
                    <Field as={Textarea} placeholder="Enter a description..." name="desc" />
                  </FormControl>
                  <Button type="submit" colorScheme="blue" width="100%" mb="10px" onClick={onClose}>
                    Submit
                  </Button>
                </form>
              )}
            </Formik>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Submit
            </Button>
            <Button variant="ghost">Close</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
