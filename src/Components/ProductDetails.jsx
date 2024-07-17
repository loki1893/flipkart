import React from "react";
import {
  Box,
  Stack,
  Text,
  Heading,
  Flex,
  UnorderedList,
  ListItem,
  Image,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const ProductDetails = ({ productData }) => {
  return (
    <Box ml={{ base: "0", sm: "87px" }} mt={{ base: "32px", sm: "0" }} flex="1">
      <Stack spacing="4">
        <Text fontSize="x-large" whiteSpace="pre-wrap">
          <Heading size="">{productData?.productTitle}</Heading>
        </Text>
        <Flex alignItems="center">
          <Text fontSize="lg" fontWeight="bold" mr="1">
            {productData?.rating}
            <StarIcon color="#388E3C" mr="1" /> 9,561 Ratings & 8,579 Reviews
          </Text>
        </Flex>
        <Flex gap="10px">
          <Box>
            <Text fontSize="2xl" color="blue.600">
              ₹{productData?.discountedPrice}
            </Text>
          </Box>
          <Box>
            <Text textDecoration="line-through" color="gray.300" fontSize="lg">
              ₹{productData?.price}
            </Text>
          </Box>
          <Box>
            <Text fontSize="lg" color="green.600">
              {productData?.discountPercentage}% off
            </Text>
          </Box>
        </Flex>
        <Box>
          <Text>
            Available offers
            <Box>
            </Box>{" "}
            <br />
            <Text>{productData?.description}</Text>
            <Text color="gray.600">
              <Heading as="h2" size="md" mb="2">
                Highlights
              </Heading>
              <UnorderedList>
                {productData?.productDetails.map((detail, index) => (
                  <ListItem key={index}>
                    <Text>{detail}</Text>
                  </ListItem>
                ))}
              </UnorderedList>
            </Text>
          </Text>
        </Box>{" "}
        <br />
        <Box>
          <Image src="https://rukminim2.flixcart.com/lockin/400/400/images/CCO__PP_2019-07-14.png?q=50" />
        </Box>
        
        <Box mt="50px">
          <Text fontSize="lg" fontWeight="bold" mb="4">
            Specifications
          </Text>
          <Table variant="simple" size="md" colorScheme="gray">
            <Tbody>
              {Object.entries(productData.specifications).map(([key, value]) => (
                <React.Fragment key={key}>
                  <Tr>
                    <Td fontWeight="bold" colSpan="2" bg="gray.100">
                      {key}
                    </Td>
                  </Tr>
                  {Array.isArray(value) ? (
                    value.map((item, index) => (
                      <Tr key={index}>
                        <Td></Td>
                        <Td>{item}</Td>
                      </Tr>
                    ))
                  ) : (
                    Object.entries(value).map(([subKey, subValue], index) => (
                      <Tr key={index}>
                        <Td>{subKey}</Td>
                        <Td>{subValue}</Td>
                      </Tr>
                    ))
                  )}
                </React.Fragment>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Stack>
    </Box>
  );
};

export default ProductDetails;
