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
} from "@chakra-ui/react";

export default function EditForm({
  tickets,
  users,
  setFetchTicketsTrigger,
  isOpen,
  onOpen,
  onClose,
}) {
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Bblaalbaa</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Submit
            </Button>
            <Button variant="ghost">Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    // <Card ps="0" ms="0" overflowX={{ sm: "scroll", xl: "hidden" }}>
    //   <CardHeader p="6px 0px 22px 0px">
    //     <Text fontSize="xl" fontWeight="bold">
    //       Edit Ticket
    //     </Text>
    //   </CardHeader>
    //   <CardBody>
    //     <Text>Edit page</Text>
    //   </CardBody>
    // </Card>
  );
}
