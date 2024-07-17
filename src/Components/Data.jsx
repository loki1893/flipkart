import React from 'react';
import {
  Flex,
  Image,
  Stack,
  Text,
  Heading,
  Divider,
  Box,
  Tooltip,
  Spacer,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { StarIcon } from '@chakra-ui/icons';

const Data = ({ data, loading }) => {
  const skeletonArray = Array.from({ length: 80 });
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      <Flex
        direction={isMobile ? 'column' : 'row'}
        justifyContent={isMobile ? 'center' : 'flex-start'}
        alignItems={isMobile ? 'center' : 'flex-start'}
        flexWrap="wrap"
        
      >
        {loading
          ? skeletonArray.map((_, index) => (
              <Box
                key={index}
                maxW="sm"
                flexBasis="19%"
                m={4}
                p={4}
                borderWidth="1px"
                bg="white"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
              >
              </Box>
            ))
          : data.map((item, index) => (
              <Box
                key={index}
                maxW="xs"
                flexBasis={isMobile ? '100%' : '30%'}
                m={4}
                 bg="ghostwhite"
                p="20px"
                transition="transform 0.2s"
                _hover={{
                  transform: 'scale(1.05)',
                  cursor: 'pointer',
                  bg: 'white',
                  boxShadow: 'md',
                 
                }}
              >
                <Tooltip label={item.productTitle}>
                  <Link to={`/product/${item._id}`}>
                    <Flex justify="center" align="center"  bg="ghostwhite" h="100px">
                      <Image
                        src={item.HeadImage}
                        alt={item.altText}
                        objectFit="contain"
                        boxSize="70%"
                        bg="white.500"
                      />
                    </Flex>
                  </Link>
                </Tooltip>

                <Stack p="1">
                  <Text isTruncated>
                    <Heading size="md">{item.productTitle}</Heading>
                  </Text>
                  <Flex alignItems="center">
                    <Box bg="#388E3C" display="inline-flex" alignItems="center">
                      <StarIcon color="white" mr="1" />
                      <Text color="white" fontSize="sm" fontWeight="bold">
                        {item.rating}
                      </Text>
                    </Box>

                    <Flex justifyContent="flex-end" alignItems="center">
                      <Box mr="10px"></Box>
                      <Box>
                        <Image
                          w="55px"
                          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                        />
                      </Box>
                    </Flex>
                  </Flex>
                  <Flex mr="60px" align="center">
                    <Text color="blue.600" fontSize="xl">
                      ₹{item.discountedPrice}
                    </Text>
                    <Spacer />
                    <Text textDecoration="line-through" color="gray.300">
                      ₹{item.price}
                    </Text>
                    <Spacer />
                    <Text color="green.600">{item.discountPercentage}% off</Text>
                  </Flex>
                </Stack>
                <Divider />
              </Box>
            ))}
      </Flex>
    </Box>
  );
};

export default Data;
