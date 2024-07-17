import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import {
  Box,
  Text,
  HStack,
  Image,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  InputGroup,
  InputRightElement,
  Button,
  Flex,
  Stack,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function UserSignup() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://192.168.1.138:3000/api/auth/signup', data);
      if (response.data.success) {
        navigate("/home");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <Box
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <HStack
        border="3px solid aliceblue"
        h="75vh"
        width={{ base: "20%", md: "35%", xl: "50%" }}
      >
        <Box w="50%" h="100%" bg="#2874f0">
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            h={"100%"}
          >
            <Text
              mt="15px"
              pl="33px"
              color="#fff"
              fontSize={{ base: "10px", md: "20px", xl: "28px" }}
              fontWeight={"500"}
            >
              SIGN UP
              <Text mt="10px" pl="20px">
                Get access to your Orders, Wishlist and Recommendations
              </Text>
            </Text>

            <Image
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
              alt="Flipkart"
              w={"250px"}
              mx={"auto"}
            />
          </Box>
        </Box>
        <Box bg="aliceblue" px={6} p="15px" w="60%" h="100%">
          <Stack spacing={3} as="form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl isRequired isInvalid={errors.firstName}>
              <FormLabel>First name</FormLabel>
              <Input
                placeholder="First name"
                {...register("firstName", { required: "First Name is required" })}
              />
              <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={errors.lastName}>
              <FormLabel>Last name</FormLabel>
              <Input
                placeholder="Last Name"
                {...register("lastName", { required: "Last Name is required" })}
              />
              <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="tel"
                {...register("phoneNumber")}
              />
            </FormControl>
            <FormControl isRequired isInvalid={errors.email}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                {...register("email", { required: "Email is required" })}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <Flex direction="column" align="flex-start">
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  {...register("password", { required: "Password is required" })}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {errors.password && (
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              )}
            </Flex>
            <Flex direction="column" align="flex-start">
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup size="md">
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Confirm password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: value => value === watch("password") || "Passwords do not match"
                  })}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {errors.confirmPassword && (
                <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
              )}
            </Flex>
            <Button type="submit" w={"100%"} color={"white"} pl={"10px"} bg={"#ff9f00"}>
              SIGN UP
            </Button>
            <Button
              onClick={() => navigate("/UserLogin")}
              mt={"10px"}
              color={"white"}
              w={"100%"}
              pl={"10px"}
              bg={"#fb641b"}
            >
              Already have an account LOGIN
            </Button>
          </Stack>
        </Box>
      </HStack>
    </Box>
  );
}

export default UserSignup;
