import React from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Badge,
  Text,
  IconButton,
  useBreakpointValue,
  Button
} from '@chakra-ui/react';
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const navigate = useNavigate() 
  const goToLogin = () =>{
    navigate('/UserLogin')
  }

  return (
    <Box position="sticky" top="0px" w="full" bg="#2874f0" zIndex={1} borderBottom="1px solid lightgray" p={3} px={4} >
      <Flex alignItems="center" justifyContent="space-between">
        <Box flexShrink={0}>
          <img 
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            alt="flipkart"
            width={isMobile ? '90px'  : '150px'} 
          />
        </Box>

        <Flex alignItems="center" flex={1} justifyContent={isMobile ? 'center' : 'center'}>
          <InputGroup w={isMobile ? '90%' : '40%'} mt={{ base: 2, md: 0 }}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon style={{ color: '#2874f0' }} />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search for products, brands and more"
              bg="white"
              border="1px solid lightgray"
              borderRadius="md"
              _focus={{ border: '1px solid #2874f0' }}
            />
          </InputGroup>
      
        </Flex>
        <Box mr={{base:"15px" ,  md:"20px" , xl:"25px"}}
        mt={{base:"5px"}}
        >
          <Button onClick={goToLogin}>Login</Button>
          </Box>

        <Flex alignItems="center">
          <Box
            cursor="pointer"
            mr={2}
            display="flex"
            alignItems="center"
            position="relative"
          >
               {!isMobile && (

               
            <Box position="sticky" top="0px" cursor="pointer" mr={{ md: 4 }}>
              <Text fontSize="sm" color="white" fontWeight="bold">
                Become a Seller
              </Text>
            </Box>
            
          )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              id="cart"
              width="24"
              height="24"
              fill="#ffffff"
            >
              <g fill="#ffffff">
                <path d="M48.5 45.7H18.2c-.5 0-.9-.2-1.1-.6-.3-.4-.3-.9-.1-1.3l2.6-6.6L17 12.6H8.6V9.8h9.6c.7 0 1.3.5 1.4 1.2l2.8 26.1c0 .2 0 .4-.1.7l-2 5h28.2v2.9"></path>
                <path d="m21.3 38.8-.6-2.7 31.9-6.6V18.2h-33v-2.8H54c.8 0 1.4.6 1.4 1.4v13.8c0 .7-.5 1.2-1.1 1.3l-33 6.9M49.9 54c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm0-8.3c-1.5 0-2.8 1.2-2.8 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8-1.3-2.8-2.8-2.8zm-33 8.3c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm0-8.3c-1.5 0-2.8 1.2-2.8 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8-1.3-2.8-2.8-2.8z"></path>
              </g>
            </svg>
            
            <Text color="white" fontSize="sm" fontWeight="bold" display={isMobile ? 'none' : 'block'}>
              Cart
              <Badge ml={1} colorScheme="blue">
                0
              </Badge>
            </Text>
          </Box>

          {isMobile && (
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              variant="outline"
              onClick={() => {
              }}
            />
          )}
        </Flex>
      </Flex>
    </Box>
  );
}

export default NavBar;
