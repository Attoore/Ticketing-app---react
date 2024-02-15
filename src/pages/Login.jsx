import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";

function Login() {
  const [isVisible, setIsVisible] = useState(false);

  const handleReveal = function () {
    setIsVisible(!isVisible);
  };

  return (
    <Card width="720px" height="520px" m="10px auto">
      <CardBody>
        <form>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <InputRightElement>
              <IconButton
                icon={isVisible ? <ViewOffIcon /> : <ViewIcon />}
                variant="text"
                onClick={handleReveal}
              />
            </InputRightElement>
            <Input type={isVisible ? "text" : "password"} />
          </InputGroup>
          <Button type="submit">Submit</Button>
        </form>
      </CardBody>
    </Card>
  );
}

export default Login;
