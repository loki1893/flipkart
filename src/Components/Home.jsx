import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Flex, Box, useBreakpointValue } from '@chakra-ui/react';
import NavBar from './NavBar';
import MobileScr from './MobileScr';
import SortByNav from './SortByNav';
import Data from './Data';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    brand: [],
    rating: [],
    sortField: 'price',
    sortOrder: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          'http://192.168.1.138:3000/api/printers/filter',
          {
            sortField: filters.sortField,
            sortOrder: filters.sortOrder,
            minPrice: filters.minPrice,
            maxPrice: filters.maxPrice,
            rating: filters.rating.length > 0 ? filters.rating : undefined,
            brand: filters.brand.length > 0 ? filters.brand : undefined,
          }
        );

        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [filters]);

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Box position="sticky" top="0px">
        <NavBar />
      </Box>
      <MotionFlex
        flexWrap={isMobile ? 'wrap' : 'nowrap'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <MotionBox
          w={isMobile ? '100%' : '300px'}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {!isMobile && <MobileScr setFilters={setFilters} />}
          {!isMobile && <SortByNav setFilters={setFilters} />}
          {isMobile && <MobileScr setFilters={setFilters} />}
          {isMobile && <SortByNav setFilters={setFilters} />}
        </MotionBox>
        <MotionBox
          flex="12"
          mt="20"
          px="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Data data={data} loading={loading} />
        </MotionBox>
      </MotionFlex>
    </>
  );
}

export default Home;
