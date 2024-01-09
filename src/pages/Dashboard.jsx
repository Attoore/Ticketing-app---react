import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Heading,
  Text,
  Container,
  Box,
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Card,
  CardHeader,
  CardBody,
  useColorModeValue,
  Avatar,
  Badge,
  Button,
  Flex,
  IconButton,
} from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Card ps="0" ms="0" overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p="6px 0px 22px 0px">
        {/* <Text fontSize="xl" fontWeight="bold">
          Authors Table
        </Text> */}
      </CardHeader>
      <CardBody>
        <Table variant="simple" colorScheme="purple">
          <Thead>
            <Tr>
              <Th ps="0">Agent</Th>
              <Th>ID</Th>
              <Th>Title</Th>
              <Th>Edited</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td pl="0px">
                <Flex align="center" minWidth="100%" flexWrap="nowrap">
                  <Avatar src="/img/abu.JPG" w="50px" borderRadius="12px" me="18px" />
                  <Flex direction="column">
                    <Text fontSize="sm" fontWeight="bold" minWidth="100%">
                      Oooga Oganen
                    </Text>
                    <Text fontSize="sm" color="gray.500" fontWeight="normal">
                      Admin
                    </Text>
                  </Flex>
                </Flex>
              </Td>

              <Td>
                <Text fontSize="sm" fontWeight="bold" color="gray.500">
                  1122
                </Text>
              </Td>

              <Td>
                <Text fontSize="sm" fontWeight="bold" color="gray.500">
                  Testi tiketti blaablaa
                </Text>
              </Td>

              <Td>
                <Text fontSize="sm" fontWeight="bold" pb=".5rem" color="gray.500">
                  12/06/21
                </Text>
              </Td>

              <Td>
                <Badge bg="green.300" color="white" fontSize="12px" p="2px 8px" borderRadius="8px">
                  Resolved
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

            <Tr>
              <Td pl="0px">
                <Flex align="center" minWidth="100%" flexWrap="nowrap">
                  <Avatar src="/img/abu.JPG" w="50px" borderRadius="12px" me="18px" />
                  <Flex direction="column">
                    <Text fontSize="sm" fontWeight="bold" minWidth="100%">
                      Oooga Oganen
                    </Text>
                    <Text fontSize="sm" color="gray.500" fontWeight="normal">
                      Admin
                    </Text>
                  </Flex>
                </Flex>
              </Td>

              <Td>
                <Text fontSize="sm" fontWeight="bold" color="gray.500">
                  1122
                </Text>
              </Td>

              <Td>
                <Text fontSize="sm" fontWeight="bold" color="gray.500">
                  Testi tiketti blaablaa
                </Text>
              </Td>

              <Td>
                <Text fontSize="sm" fontWeight="bold" pb=".5rem" color="gray.500">
                  12/06/21
                </Text>
              </Td>

              <Td>
                <Badge bg="green.300" color="white" fontSize="12px" p="2px 8px" borderRadius="8px">
                  Resolved
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

            <Tr>
              <Td pl="0px">
                <Flex align="center" minWidth="100%" flexWrap="nowrap">
                  <Avatar src="/img/abu.JPG" w="50px" borderRadius="12px" me="18px" />
                  <Flex direction="column">
                    <Text fontSize="sm" fontWeight="bold" minWidth="100%">
                      Oooga Oganen
                    </Text>
                    <Text fontSize="sm" color="gray.500" fontWeight="normal">
                      Admin
                    </Text>
                  </Flex>
                </Flex>
              </Td>

              <Td>
                <Text fontSize="sm" fontWeight="bold" color="gray.500">
                  1122
                </Text>
              </Td>

              <Td>
                <Text fontSize="sm" fontWeight="bold" color="gray.500">
                  Testi tiketti blaablaa
                </Text>
              </Td>

              <Td>
                <Text fontSize="sm" fontWeight="bold" pb=".5rem" color="gray.500">
                  12/06/21
                </Text>
              </Td>

              <Td>
                <Badge bg="green.300" color="white" fontSize="12px" p="2px 8px" borderRadius="8px">
                  Resolved
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
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
}

// const boxStyles = {
//   padding: "10px",
//   bg: "green",
//   color: "white",
//   m: "10px",
//   textAlign: "center",
//   ":hover": {
//     color: "black",
//     bg: "yellow.200",
//   },
// };

// <div>
//     <Container as="section" maxWidth="4xl" py="20px">
//       <Heading>Chakra heading</Heading>
//       <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, asperiores.</Text>

//       <Box sx={boxStyles}>Olaa como estas</Box>
//     </Container>
//   </div>

{
  /* <SimpleGrid p="10px" spacing={10} minChildWidth="250px">
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>

      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
      <Box bg="white" h="200px" border="1px solid"></Box>
    </SimpleGrid> */
}
