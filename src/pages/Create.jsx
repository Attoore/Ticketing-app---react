import {
  Box,
  Heading,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Textarea,
  Text,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
// import { Form, redirect, useOutletContext } from "react-router-dom";

export default function Create({ setFetchTicketsTrigger, setFetchUsersTrigger, users }) {
  //Recieving fetch function trigger as prop

  return (
    <>
      <Box as="ticket-form" maxW="720px" bg="white" ms="20px" p="15px">
        <Heading as="h1" size="lg" color="gray.500" mb="6">
          New Ticket
        </Heading>
        <Formik // Using Formik library for the form
          initialValues={{
            //Providing initial values for fields - select fields need value to not be empty if untouched
            title: "",
            agent: "Mario Admin",
            status: "Open",
            desc: "",
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
            //Post request to the server using ticket object
            try {
              const response = await fetch(`http://127.0.0.1:8080/tickets`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(ticket),
              });
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
                    <option value="Mario Admin">Mario Admin</option>
                    <option value="John User">John User</option>
                    <option value="Mike User">Mike User</option>
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
              <Button type="submit">Submit</Button>
            </form>
          )}
        </Formik>
      </Box>
      <Box as="user-form" maxW="720px" bg="white" ms="20px" p="15px">
        <Heading as="h1" size="lg" color="gray.500" mb="6">
          New User
        </Heading>
        <Formik // Using Formik library for the form
          initialValues={{
            //Providing initial values for fields - select fields need value to not be empty if untouched
            username: "",
            password: "",
            role: "User",
            img: `/img/11.jpg`, // default profilepic incase not found
          }}
          onSubmit={async function (values, { resetForm }) {
            //Values from formik
            const user = {
              // Extracting field values into user object
              username: values.username,
              password: values.password,
              role: values.role,
              img: `/img/${users.length + 1}.jpg`, // increment img url to assign next profilepic
            };

            console.log(users.length + 1);
            console.log(user);

            //Post request to the server using user object
            // try {
            //   const response = await fetch(`http://127.0.0.1:8080/users`, {
            //     method: "POST",
            //     headers: { "content-type": "application/json" },
            //     body: JSON.stringify(user),
            //   });
            //   const userData = await response.json();
            //   console.log(userData);
            //   // trigger fetching updated ticket list (in dependacy array in Rootlayout component)
            //   setFetchUsersTrigger((prev) => !prev); //toggle true/false
            // } catch (error) {
            //   console.log(error.message);
            // }
            // resetForm();
          }}
        >
          {(
            { handleSubmit, errors, touched } //These from formik
          ) => (
            <form onSubmit={handleSubmit}>
              <FormControl isRequired mb="30px">
                <FormLabel> Username </FormLabel>
                <Field as={Input} type="text" name="username" />
              </FormControl>

              <FormControl isRequired mb="30px">
                <FormLabel> Password </FormLabel>
                <Field as={Input} type="text" name="password" />
              </FormControl>

              <FormControl>
                <FormLabel>Role</FormLabel>
                <Field as={Select} name="role">
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </Field>
              </FormControl>

              <Button type="submit">Submit</Button>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
}

// export const createAction = async function ({ request }) {
//   //request obj from react router
//   const data = await request.formData();

//   //Extracting values from form fields into a ticket object
//   const ticket = {
//     title: data.get("title"),
//     agent: data.get("agent"),
//     status: data.get("status"),
//     desc: data.get("desc"),
//   };

//   //Post request to the server using ticket object
//   try {
//     const response = await fetch(`http://127.0.0.1:8080/tickets`, {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(ticket),
//     });

//     const ticketData = await response.json();
//     // console.log(ticketData)
//     // trigger fetching updated ticket list (in dependacy array in Rootlayout component)
//     // setFetchTrigger((prev) => !prev); //toggle true/false
//   } catch (error) {
//     console.log(error.message);
//   }

//   return redirect("/"); //Redirects user to dashboard after submit
// };

//HOW TO TRIGGER RE-FETCH AFTER REDIRECT
// 1- cant use fetchtrigger inside func that has the redirect
// 2- redirect causes remount of Dashboard, but refetch useEffect on rootlayout (not remounted)
// 3- move useEffect to dashbord? How will create/profile access states?
