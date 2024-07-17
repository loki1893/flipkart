import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Flex, Grid, GridItem } from '@chakra-ui/react';
import axios from 'axios';
import NavBar from './NavBar';
import ProductDetails from './ProductDetails';
import ProductImageAndButtons from './ProductImageandButton';
import Footer from './Footer';
function ProductDes() {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://192.168.1.138:3000/api/printers//${id}`);
        setProductData(response.data);
        setMainImage(response.data.HeadImage); 
      } catch (error) {
        console.error('Error fetching product data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProductData();
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(productData,"sefrsfrfre")

  return (
    <>
    <NavBar />
    <Grid
      templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' }}
      gap={6}
      mt="4"
    >
      <GridItem colSpan={{ base: '1', sm: '1' }} display="flex" justifyContent="center">
        <ProductImageAndButtons onHover={setMainImage} mainImage={mainImage} productData={productData} />
      </GridItem>
      <GridItem colSpan={{ base: '1', sm: '1' }}>
        <ProductDetails productData={productData} />
      </GridItem>
    </Grid>
    <Footer mt="4" />
  </>
  );
}
export default ProductDes;



