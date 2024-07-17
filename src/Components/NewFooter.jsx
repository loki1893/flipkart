import React from 'react'
import { Flex, Box, Container, Text, Link, Icon } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaGem, FaHome, FaEnvelope, FaPhone, FaFax  } from 'react-icons/fa';

function NewFooter() {
  return (
<Box>
<Box as="footer" bgColor='black' color='white' py={8}>

<Flex justify='center' justifyItems='space-between' py={4} borderBottom='1px' borderColor='gray.300'>
  <Box me={5} display={{ base: 'none', lg: 'block' }}>
    <Text>Get connected with us on social networks:</Text>
  </Box>

  <Flex>
    <Link href='#' me={4} _hover={{ textDecor: 'none' }}>
      <Icon as={FaFacebookF} boxSize={5} />
    </Link>
    <Link href='#' me={4} _hover={{ textDecor: 'none' }}>
      <Icon as={FaTwitter} boxSize={5} />
    </Link>
    <Link href='#' me={4} _hover={{ textDecor: 'none' }}>
      <Icon as={FaGoogle} boxSize={5} />
    </Link>
  </Flex>
</Flex>

<Container maxW='container.xl' py={8}>
  <Flex flexWrap='wrap' justify='center' justifyItems='start'>

    <Box width={{ base: '100%', md: 'auto' }} maxW={{ base: '100%', md: '25%' }} mb={4} mx='auto'>
      <Text fontWeight='bold' mb={4}>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
<path fill="#78a0cf" d="M13,27c-1.105,0-2,0.895-2,2s0.895,2,2,2s2-0.895,2-2S14.105,27,13,27z"></path><path fill="#f1bc19" d="M77,12c-0.552,0-1,0.448-1,1s0.448,1,1,1s1-0.448,1-1S77.552,12,77,12z"></path><path fill="#cee1f4" d="M50,13c-20.435,0-37,16.565-37,37s16.565,37,37,37s37-16.565,37-37S70.435,13,50,13z"></path><path fill="#f1bc19" d="M83,11c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S85.209,11,83,11z"></path><path fill="#78a0cf" d="M87,22c-1.105,0-2,0.895-2,2s0.895,2,2,2s2-0.895,2-2S88.105,22,87,22z"></path><path fill="#fbcd59" d="M14,59c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S16.209,59,14,59z"></path><path fill="#fbcd59" d="M84,75c-1.105,0-2,0.895-2,2s0.895,2,2,2s2-0.895,2-2S85.105,75,84,75z"></path><path fill="#78a0cf" d="M25,85c-1.105,0-2,0.895-2,2s0.895,2,2,2s2-0.895,2-2S26.105,85,25,85z"></path><path fill="#fff" d="M16.5,51c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5S17.881,51,16.5,51z"></path><path fill="#f1bc19" d="M20,66c-0.552,0-1,0.448-1,1s0.448,1,1,1s1-0.448,1-1S20.552,66,20,66z"></path><path fill="#fff" d="M81,33c-0.552,0-1,0.448-1,1s0.448,1,1,1s1-0.448,1-1S81.552,33,81,33z"></path><polygon fill="#f1bc19" points="66.809,29.867 68.989,27.593 31.064,27.593 33.338,29.867 27.789,34.5 33.338,34.5 72.066,34.367"></polygon><polygon fill="#d7955f" points="30.5,31.798 30.586,27.809 32.814,29.899"></polygon><polygon fill="#d7955f" points="69.5,31.798 69.414,27.809 67.186,29.899"></polygon><circle cx="41" cy="31" r="1.5" fill="#836f61"></circle><circle cx="59" cy="31" r="1.5" fill="#836f61"></circle><polygon fill="#fde751" points="27.93,34.382 33.166,29.695 33.242,34.638"></polygon><polygon fill="#fde751" points="72.156,34.382 66.92,29.695 66.844,34.638"></polygon><path fill="#fde751" d="M72.5,34.5v34c0,2.209-1.791,4-4,4h-37c-2.209,0-4-1.791-4-4v-34H72.5z"></path><path fill="#fff" d="M60.5,37.2c-0.441,0-0.8,0.359-0.8,0.8c0,4.521-4.351,8.2-9.7,8.2s-9.7-3.679-9.7-8.2 c0-0.441-0.359-0.8-0.8-0.8s-0.8,0.359-0.8,0.8c0,5.404,5.069,9.8,11.3,9.8s11.3-4.396,11.3-9.8 C61.3,37.559,60.941,37.2,60.5,37.2z"></path><path fill="#2d80d3" d="M58.5,72.5l0.564-7h3.611c0.865,0,1.629-0.554,1.901-1.375c0.116-0.351,0.235-0.744,0.335-1.145 c0.314-1.26-0.645-2.479-1.944-2.479h-2.903c0,0-0.251-3.759,1.554-6.486c1.07-1.617,2.95-2.514,4.889-2.514h1.72 c0.499,0,0.925-0.365,0.991-0.86c0.22-1.659,0.274-5.14-3.154-5.14c0,0-9.5-0.5-13,8c0,0-1.564,3-1.564,7l-15.457-0.024 l7.827,2.226l-4.524,0.598l5.718,1.199l-12.564,1l18.694,1l-0.598,5.782"></path><path fill="#472b29" d="M69.5,32c-0.276,0-0.5-0.224-0.5-0.5v-4c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4 C70,31.776,69.776,32,69.5,32z"></path><path fill="#472b29" d="M41,32.75c-0.965,0-1.75-0.785-1.75-1.75s0.785-1.75,1.75-1.75s1.75,0.785,1.75,1.75 S41.965,32.75,41,32.75z M41,29.75c-0.689,0-1.25,0.561-1.25,1.25s0.561,1.25,1.25,1.25s1.25-0.561,1.25-1.25 S41.689,29.75,41,29.75z"></path><path fill="#472b29" d="M59,32.75c-0.965,0-1.75-0.785-1.75-1.75s0.785-1.75,1.75-1.75s1.75,0.785,1.75,1.75 S59.965,32.75,59,32.75z M59,29.75c-0.689,0-1.25,0.561-1.25,1.25s0.561,1.25,1.25,1.25s1.25-0.561,1.25-1.25 S59.689,29.75,59,29.75z"></path><path fill="#472b29" d="M60.5,37.5c0.276,0,0.5,0.224,0.5,0.5c0,5.238-4.935,9.5-11,9.5S39,43.238,39,38 c0-0.276,0.224-0.5,0.5-0.5S40,37.724,40,38c0,4.687,4.486,8.5,10,8.5s10-3.813,10-8.5C60,37.724,60.224,37.5,60.5,37.5 M60.5,37c-0.551,0-1,0.449-1,1c0,4.411-4.262,8-9.5,8s-9.5-3.589-9.5-8c0-0.551-0.449-1-1-1s-1,0.449-1,1 c0,5.514,5.159,10,11.5,10s11.5-4.486,11.5-10C61.5,37.449,61.051,37,60.5,37L60.5,37z"></path><path fill="#472b29" d="M30.5,42.75c-0.138,0-0.25-0.112-0.25-0.25v-4.021c0-0.138,0.112-0.25,0.25-0.25h4.628 c0.138,0,0.25,0.112,0.25,0.25s-0.112,0.25-0.25,0.25H30.75V42.5C30.75,42.638,30.638,42.75,30.5,42.75z"></path><path fill="#472b29" d="M30.5,46.771c-0.138,0-0.25-0.112-0.25-0.25v-2.676c0-0.138,0.112-0.25,0.25-0.25 s0.25,0.112,0.25,0.25v2.676C30.75,46.659,30.638,46.771,30.5,46.771z"></path><path fill="#472b29" d="M72.995,34.475c-0.002-0.034-0.011-0.066-0.02-0.099c-0.008-0.031-0.013-0.061-0.027-0.089 c-0.012-0.026-0.031-0.047-0.048-0.071c-0.022-0.03-0.042-0.06-0.069-0.085c-0.006-0.005-0.008-0.013-0.015-0.018l-5.072-4.15 l2.109-2.109c0.143-0.143,0.186-0.358,0.108-0.545S69.702,27,69.5,27h-39c-0.092,0-0.174,0.032-0.248,0.075 c-0.018,0.01-0.033,0.021-0.05,0.033c-0.07,0.053-0.129,0.117-0.163,0.199c0,0-0.001,0-0.001,0.001c-0.001,0.002,0,0.003,0,0.005 C30.014,27.371,30,27.434,30,27.5v4c0,0.092,0.031,0.173,0.075,0.247l-2.891,2.366c-0.006,0.005-0.009,0.013-0.015,0.018 c-0.028,0.025-0.048,0.055-0.069,0.085c-0.017,0.024-0.036,0.045-0.048,0.071c-0.013,0.028-0.019,0.059-0.027,0.089 c-0.009,0.033-0.018,0.065-0.02,0.099c0,0.009-0.005,0.016-0.005,0.025v34c0,2.481,2.019,4.5,4.5,4.5h37 c2.481,0,4.5-2.019,4.5-4.5v-34C73,34.491,72.995,34.484,72.995,34.475z M71.1,34h-4.041v-3.306L71.1,34z M68.293,28 l-1.646,1.646c-0.1,0.1-0.153,0.237-0.146,0.379c0.004,0.073,0.024,0.143,0.058,0.206V34H33.492v-3.949 c0.001-0.009,0.006-0.017,0.007-0.026c0.008-0.142-0.046-0.279-0.146-0.379L31.707,28H68.293z M31,28.707l1.256,1.256L31,30.99 V28.707z M32.992,30.652V34H28.9L32.992,30.652z M51.385,66.338c-0.045-0.053-0.108-0.084-0.177-0.088l-14.942-0.799l8.817-0.702 c0.124-0.01,0.222-0.109,0.229-0.233c0.009-0.124-0.076-0.234-0.197-0.261l-4.285-0.898l3.073-0.406 c0.117-0.016,0.207-0.111,0.216-0.229s-0.066-0.227-0.181-0.259l-6.093-1.733L51.5,60.75c0.066,0,0.13-0.026,0.177-0.073 s0.073-0.11,0.073-0.177c0-3.887,1.52-6.855,1.545-6.905c3.39-8.23,12.665-7.84,12.769-7.845c0.951,0,1.684,0.286,2.179,0.852 c0.952,1.087,0.864,2.977,0.728,4.006c-0.048,0.366-0.368,0.643-0.743,0.643h-1.72c-2.104,0-4.009,0.981-5.097,2.626 c-1.831,2.766-1.606,6.483-1.596,6.641c0.009,0.131,0.117,0.233,0.249,0.233h2.903c0.544,0,1.048,0.246,1.383,0.675 c0.333,0.426,0.448,0.971,0.318,1.494c-0.086,0.346-0.197,0.726-0.33,1.128c-0.238,0.72-0.906,1.203-1.663,1.203h-3.611 c-0.13,0-0.238,0.1-0.249,0.229L58.29,72h-7.413l0.567-5.475C51.45,66.458,51.429,66.39,51.385,66.338z M72,68.5 c0,1.93-1.57,3.5-3.5,3.5h-9.709l0.503-6.25h3.381c0.973,0,1.832-0.621,2.138-1.547c0.137-0.414,0.251-0.806,0.34-1.163 c0.169-0.674,0.02-1.375-0.409-1.923c-0.431-0.551-1.078-0.867-1.776-0.867h-2.662c-0.017-0.852,0.039-3.857,1.521-6.099 c0.996-1.504,2.745-2.401,4.681-2.401h1.72c0.625,0,1.158-0.463,1.239-1.076c0.147-1.113,0.234-3.166-0.848-4.401 c-0.594-0.679-1.452-1.022-2.54-1.022c0,0-0.001,0-0.002,0c-0.091-0.001-9.715-0.414-13.234,8.135 c-0.063,0.122-1.528,2.977-1.59,6.865l-15.209-0.024c-0.125,0-0.23,0.092-0.248,0.215c-0.017,0.124,0.06,0.241,0.18,0.275 l6.667,1.896l-3.329,0.44c-0.12,0.017-0.212,0.117-0.217,0.238c-0.005,0.122,0.079,0.229,0.198,0.255l4.02,0.843L32.48,65.251 c-0.132,0.01-0.232,0.121-0.23,0.252c0.002,0.132,0.105,0.239,0.236,0.247l18.433,0.985L50.373,72H31.5c-1.93,0-3.5-1.57-3.5-3.5 V35h44V68.5z"></path>
</svg>
     FLIPKART
      </Text>
      <Text>
      Flipkart is one of India’s leading e-commerce marketplaces. It was founded in October 2007 and its headquarters are in Bengaluru. It was founded by Sachin Bansal and Binny Bansal.
      </Text>
    </Box>

    <Box width={{ base: '100%', md: 'auto' }} maxW={{ base: '100%', md: '25%' }} mb={4} mx='auto'>
      <Text fontWeight='bold' mb={4}>Products</Text>
      <Link href='#' _hover={{ textDecor: 'none' }} display='block' mb={2}>Electronic</Link>
      <Link href='#' _hover={{ textDecor: 'none' }} display='block' mb={2}>Fashion</Link>
    </Box>

    <Box width={{ base: '100%', md: 'auto' }} maxW={{ base: '100%', md: '25%' }} mb={4} mx='auto'>
      <Text fontWeight='bold' mb={4}>Useful links</Text>
      <Link href='#' _hover={{ textDecor: 'none' }} display='block' mb={2}>Pricing</Link>
      <Link href='#' _hover={{ textDecor: 'none' }} display='block' mb={2}>Settings</Link>
    
    </Box>

  </Flex>
</Container>

<Box textAlign='center' py={4} bgColor='rgba(0, 0, 0, 0.05)'>
  <Text fontSize='sm'>© 2024 Copyright:
    <Link href='https://mdbootstrap.com/' fontWeight='bold' ml={1} _hover={{ textDecor: 'none' }}>LokiBhai.com</Link>
  </Text>
</Box>

</Box>
</Box>
)
}

export default NewFooter