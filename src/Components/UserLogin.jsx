import React from "react";
import { Stack, HStack, VStack, Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Flex,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function UserLogin() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate()

  const createAccount = () =>{
    navigate("/UserSignup")
  }

  

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <HStack
        border="3px solid aliceblue"
        h="50%"
        width={{ base: "30%", md: "35%", xl: "50%" }}
      >
        <Box w="50%" h="100%" bg="#2874f0">
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            h={"100%"}
          >
            <Text
              mt={"15px"}
              pl={"33px"}
              color={"#fff"}
              fontSize={{ base: "15px", md: "20px", xl: "29" }}
            >
              LOGIN
              <Text mt="10px" pl="15px">
                Get access to your Orders, Wishlist and Recommendations
              </Text>
            </Text>
            <Image
              src="	https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
              alt={"flipkart"}
              w="250px"
              mx={"auto"}
            />
          </Box>
        </Box>
        <Box p={"35px"} w="50%" h="100%" bg="aliceblue" px={6}>
          <Stack spacing={5}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" id="email" name="email" />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <Flex direction="column" align="flex-start">
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  name="password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Flex>
            <Flex direction="column" align="flex-start">
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup size="md">
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  name="password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Flex>
            <Button mt={"10px"} color={"white"} w={"100%"} pl={"10px"} bg={"#fb641b"}>
              Login
            </Button>
            <Button onClick={createAccount} w={"100%"} color={"white"} pl={"10px"} bg={"#ff9f00"}>
              Create Account
            </Button>
          </Stack>
        </Box>
      </HStack>
    </Box>
  );
}

export default UserLogin;


 'http://192.168.1.138:3000/api/auth/login'