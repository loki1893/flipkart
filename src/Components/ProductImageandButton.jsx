import React from 'react';
import { Box, Image, Flex, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionButton = motion(Button);

const ProductImageAndButtons = ({ mainImage, productData, onHover }) => {
  const navigate = useNavigate();

  const addToCart = () => {
    const apiUrl = `http://192.168.1.138:3000/api/cart`;

    const requestData = {
      printerId: productData._id,
      quantity: 1,
    };

    axios
      .post(apiUrl, requestData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('Item successfully added to cart:', response.data);
        navigate(`/cart/${productData._id}`);
      })
      .catch((error) => {
        console.error('Error adding item to cart:', error);
      });
  };

  return (
    <MotionBox
      sx={{ position: "sticky", top: "80px", width: "470px", height: "450px", marginBottom: "30px" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Flex>
        <Box>
          {productData.DescriptiveImages.map((item, index) => (
            <MotionBox key={index} mr="20px" w="35px" mt="78px" whileHover={{ scale: 1.1 }}>
              <Image
                src={item}
                alt={productData.altText}
                onMouseEnter={() => onHover(item)}
              />
            </MotionBox>
          ))}
        </Box>
        <Box zIndex={123} position="relative" width="80%" mt="36px">
          <MotionImage
            src={mainImage || productData?.HeadImage}
            alt={productData?.altText}
            boxSize="300px"
            border="1px whitesmoke"
            objectFit="contain"
            whileHover={{ transform: "scale(1.05)", transition: "transform 0.2s ease-in-out" }}
            style={{ marginBottom: '36px' }}
          />
          <Flex gap="25px">
            <MotionButton
              height="60px"
              width="160px"
              bg="#FF9F00"
              color="white"
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              fontSize="lg"
              fontWeight="bold"
              borderRadius="md"
              whileHover={{ bg: '#FFC87D', scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BUY NOW
            </MotionButton>
            <MotionButton
              height="60px"
              width="180px"
              bg="#fb641b"
              color="white"
              display="flex"
              alignItems="center"
              justifyContent="space-around"
              fontSize="lg"
              fontWeight="bold"
              borderRadius="md"
              whileHover={{ bg: '#FFC87D', scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addToCart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                id="cart"
                width="40px"
                fill="currentColor"
                style={{ marginRight: '8px' }}
              >
                <g fill="currentColor">
                  <path d="M48.5 45.7H18.2c-.5 0-.9-.2-1.1-.6-.3-.4-.3-.9-.1-1.3l2.6-6.6L17 12.6H8.6V9.8h9.6c.7 0 1.3.5 1.4 1.2l2.8 26.1c0 .2 0 .4-.1.7l-2 5h28.2v2.9"></path>
                  <path d="m21.3 38.8-.6-2.7 31.9-6.6V18.2h-33v-2.8H54c.8 0 1.4.6 1.4 1.4v13.8c0 .7-.5 1.2-1.1 1.3l-33 6.9M49.9 54c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm0-8.3c-1.5 0-2.8 1.2-2.8 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8-1.3-2.8-2.8-2.8zm-33 8.3c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm0-8.3c-1.5 0-2.8 1.2-2.8 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8-1.3-2.8-2.8-2.8z"></path>
                </g>
              </svg>
              ADD TO CART
            </MotionButton>
          </Flex>
        </Box>
      </Flex>
    </MotionBox>
  );
};

export default ProductImageAndButtons;
