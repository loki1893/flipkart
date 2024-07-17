import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Image,
  Text,
  Stack,
  Heading,
  Button,
  StackDivider,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Spacer,
  Center,
  ScaleFade,
  useBreakpointValue,
} from "@chakra-ui/react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = async () => {
    try {
      const response = await axios.post("http://192.168.1.138:3000/api/cart");
      setCartItems(response?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const incrementQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity++;
    setCartItems(updatedCartItems);
  };

  const decrementQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity--;
      setCartItems(updatedCartItems);
    }
  };

  const removeItem = async (_id) => {
    try {
      const response = await axios.delete(
        `http://192.168.1.138:4001/api/cart/${_id}`
      );
      if (response.status === 200) {
        const updatedCartItems = cartItems.filter((item) => item._id !== _id);
        setCartItems(updatedCartItems);
      } else {
        console.error("Failed to remove item from cart");
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const calculateTotalDiscount = () => {
    return cartItems
      .reduce((total, item) => {
        const discountedPrice = parseFloat(item.printerId.discountedPrice);
        const price = parseFloat(item.printerId.price);
        const discountAmount = (price - discountedPrice) * item.quantity;
        return total + discountAmount;
      }, 0)
      .toFixed(2);
  };

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => {
        const discountedPrice = parseFloat(item.printerId.discountedPrice);
        return total + discountedPrice * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const isMobile = useBreakpointValue({ base: true, sm: false });

  return (
    <Box>
      <NavBar />
      {cartItems.length === 0 && !loading ? (
        <Center h="80vh">
          <ScaleFade in={true} initialScale={0.5}>
            <Box p={6} rounded="md" bg="white" boxShadow="lg" textAlign="center">
              <Heading mb={4}>Your Cart is Empty</Heading>
              <Text mb={4}>Add items to your cart to see them here.</Text>
              <Button
                bg={"blanchedalmond"}
                onClick={() => {
                  navigate(`/`);
                }}
              >
                Shop Now
              </Button>
            </Box>
          </ScaleFade>
        </Center>
      ) : (
        <Box display="flex"  flexDirection={{ base: "column", sm: "row" }} ml="2" pl={isMobile ? 0 : "400px"}   gap={isMobile ? "10px" : "40px"}>
          {!isMobile && (
            <Box width="46%">
              {cartItems.map((item, index) => (
                <Box key={index} mt="50px" pl="40px">
                  <Card
                    bg="whitesmoke"
                    display="flex"
                    justifyContent="space-between"
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                  >
                    <Image
                      src={item.printerId.HeadImage}
                      alt={item.printerId.productTitle}
                      mt="50px"
                      width="134px"
                      height="83px"
                      ml="20px"
                    />
                    <Stack gap="5px" text="xl" fontSize="xm" spacing="4">
                      <CardBody>
                        <Box>
                          <Text
                            fontSize="medium"
                            overflow="hidden"
                            whiteSpace={"nowrap"}
                            textOverflow={"ellipsis"}
                            width={"440px"}
                            fontWeight="700"
                            mt="20px"
                            py="2"
                          >
                            {item.printerId.productTitle}
                          </Text>
                        </Box>
                      </CardBody>
                      <Box>
                        <Stack p="1">
                          <Flex mr="189px" align="center">
                            <Text pl="10px" color="blue.600" fontSize="xl">
                              ₹{item?.printerId?.discountedPrice}
                            </Text>
                            <Spacer />
                            <Text
                              ml="50px"
                              textDecoration="line-through"
                              color="gray.300"
                            >
                              ₹{item?.printerId?.price}
                            </Text>
                            <Spacer />
                            <Text color="green.600">
                              {item?.printerId?.discountPercentage}% off
                            </Text>
                          </Flex>
                        </Stack>
                      </Box>
                      <Stack direction="row" spacing="4" alignItems="center">
                        <Button
                          size="sm"
                          onClick={() => incrementQuantity(index)}
                          variant="outline"
                          borderColor="gray.400"
                          _hover={{
                            transform: "scale(1.1)",
                            transition: "transform 0.2s ease",
                            background:
                              "linear-gradient(135deg, #6C6CE5, #4EA7E8)",
                            borderColor: "#4EA7E8",
                            color: "white",
                          }}
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => setHovered(false)}
                        >
                          +
                        </Button>
                        <Box
                          bg="gray.100"
                          borderRadius="md"
                          p="2"
                          borderColor="gray.400"
                          _hover={{
                            backgroundColor: hovered ? "gray.200" : "gray.100",
                          }}
                        >
                          {item.quantity}
                        </Box>
                        <Button
                          size="sm"
                          onClick={() => decrementQuantity(index)}
                          variant="outline"
                          borderColor="gray.400"
                          _hover={{
                            transform: "scale(1.1)",
                            transition: "transform 0.2s ease",
                            background:
                              "linear-gradient(135deg, #6C6CE5, #4EA7E8)",
                            borderColor: "#4EA7E8",
                            color: "white",
                          }}
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => setHovered(false)}
                        >
                          -
                        </Button>

                        <Button>SAVE FOR LATER</Button>
                        <Button onClick={() => removeItem(item._id)}>Remove</Button>
                      </Stack>
                      <Box>
                        <Button
                          mt="20px"
                          mb="25px"
                          height="48px"
                          width="150px"
                          color="white"
                          colorScheme="orange"
                          ml="285px"
                        >
                          PLACE ORDER
                        </Button>
                      </Box>
                    </Stack>
                  </Card>
                </Box>
              ))}
            </Box>
          )}

          {isMobile && (
            <Box width="100%">
              {cartItems.map((item, index) => (
                <Box key={index} mt="20px">
                  <Card
                    bg="whitesmoke"
                    display="flex"
                    justifyContent="center"
                    direction="column"
                    overflow="hidden"
                    variant="outline"
                    p="10px"
                  >
                    <Flex display={"flex"} flexWrap={"wrap"}  justifyContent={"center"}>
                      <Box>      
                          <Image
                          width={"99px"}
                        src={item.printerId.HeadImage}
                        alt={item.printerId.productTitle}
                        
                      />
                      </Box>
                <Box>
                      <Text
                        fontSize="sm"
                        fontWeight="bold"
                        textAlign="left"
                        flex="1"
                        mt="40px"
                      >
                        {item.printerId.productTitle}
                      </Text>
                      </Box>
                      
                      <Button bg={"red"} ml="240px" mt="25px" textColor={"white"} size="sm" onClick={() => removeItem(item._id)}>
                        Remove

                      </Button>
                    </Flex>
                    <Flex pr="180px" align="center" justify="space-between" mt="5px">
                      <Text fontSize="sm" color="blue.600">
                        ₹{item?.printerId?.discountedPrice}
                      </Text>
                      <Text
                        textDecoration="line-through"
                        fontSize="xs"
                        color="gray.400"
                        ml="5px"
                      >
                        ₹{item?.printerId?.price}
                      </Text>
                      <Text fontSize="xs" color="green.600">
                        {item?.printerId?.discountPercentage}% off
                      </Text>
                    </Flex>
                    <Flex align="center" justify="space-between" mt="5px">
                      <Button
                        size="sm"
                        onClick={() => incrementQuantity(index)}
                        variant="outline"
                        borderColor="gray.400"
                        _hover={{
                          transform: "scale(1.1)",
                          transition: "transform 0.2s ease",
                          background:
                            "linear-gradient(135deg, #6C6CE5, #4EA7E8)",
                          borderColor: "#4EA7E8",
                          color: "white",
                        }}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                      >
                        +
                      </Button>
                      <Box
                        bg="gray.100"
                        borderRadius="md"
                        p="2"
                        borderColor="gray.400"
                        _hover={{
                          backgroundColor: hovered ? "gray.200" : "gray.100",
                        }}
                      >
                        {item.quantity}
                      </Box>
                      <Button
                        size="sm"
                        onClick={() => decrementQuantity(index)}
                        variant="outline"
                        borderColor="gray.400"
                        _hover={{
                          transform: "scale(1.1)",
                          transition: "transform 0.2s ease",
                          background:
                            "linear-gradient(135deg, #6C6CE5, #4EA7E8)",
                          borderColor: "#4EA7E8",
                          color: "white",
                        }}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                      >
                        -
                      </Button>
                    </Flex>
                    <Button
                      mt="10px"
                      height="32px"
                      width="100%"
                      color="white"
                      colorScheme="orange"
                    >
                      PLACE ORDER
                    </Button>
                  </Card>
                </Box>
              ))}
            </Box>
          )}

<Box mb="40px" display={"flex"} flexDirection={"column"} width={isMobile ? "100%" : "15%"}  mt={isMobile ? "20px" : "40px"}>
  <Card  bg="whitesmoke">
    <CardHeader>
      <Heading mt="30px"  size="md">Price Details</Heading>
    </CardHeader>
    <CardBody>
      <Stack divider={<StackDivider />} spacing="4">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Heading size="xs" textTransform="uppercase">
            Total Price
          </Heading>
          <Text pt="2" fontSize="sm">
            ₹{calculateTotalPrice()}
          </Text>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Heading size="xs" textTransform="uppercase">
            Discount
          </Heading>
          <Text color="#388e3c" pt="2" fontSize="sm">
            ₹{calculateTotalDiscount()}
          </Text>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Heading size="xs" textTransform="uppercase">
            Delivery Charges
          </Heading>
          <Text color="#388e3c" pt="2" fontSize="sm">
            FREE
          </Text>
        </Box>
        {!isMobile && (
          <Box mt="30px"  color="#388e3c" size="xm" fontSize="xm">
            You will save ₹{calculateTotalDiscount()} on this order
          </Box>
        )}
      </Stack>
    </CardBody>
  </Card>
</Box>


        </Box>
      )}
    </Box>
  );
}

export default Cart;
