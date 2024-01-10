import { UnlockIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";

export default function Navbar() {
  const toast = useToast();

  const showToast = function () {
    toast({
      title: "Logged out",
      description: "Succesfully logged out",
      dutaion: 5000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcon />,
    });
  };
  return (
    <Flex as="nav" p="10px" alignItems="center" gap="12px" m="10px">
      <Heading as="h1" color="gray.500">
        Dashboard
      </Heading>
      <Spacer />
      {/*first two  props fallback options for avatar */}
      <Avatar name="user name" bg="green.200" src="/img/2.jpg" w="50px" borderRadius="12px">
        <AvatarBadge width="1.3em" bg="teal.500">
          <Text fontSize="xs" color="white">
            3
          </Text>
        </AvatarBadge>
      </Avatar>
      <Flex direction="column" gap="0">
        <Text fontSize="md" fontWeight="bold">
          Arthur Ayes
        </Text>
        <Text fontSize="sm" color="gray.500" fontWeight="normal">
          Admin
        </Text>
      </Flex>
      <Button onClick={showToast} colorScheme="purple">
        Logout
      </Button>
    </Flex>

    // toast using state from comments
    // Super useful for state :)  every aspect can changed based on state
    // let isTrue = true
    //     const handleToast = () => {
    //         toast({
    //             title: isTrue ? 'Created' : 'Error',
    //             description: 'res.body',
    //             status: isTrue? 'success' : 'error',
    //             isClosable: true,
    //             variant: 'subtle',
    //             position: 'top',
    //             duration: 2000,
    //             icon: isTrue? <CheckIcon/> : <WarningIcon/>
    //         })
    //     }

    // <Flex bg="gray.200" justify="space-between">
    //   <Box w="150px" h="50px" bg="red">
    //     1
    //   </Box>
    //   <Box w="150px" h="50px" bg="green">
    //     2
    //   </Box>
    //   <Box w="150px" h="50px" bg="blue">
    //     3
    //   </Box>
    //   <Box w="150px" h="50px" bg="yellow">
    //     4
    //   </Box>
    // </Flex>
  );
}
