import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  Divider,
  Select,
  Checkbox,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";

function SortByNav({ setFilters }) {
  const [sliderValues, setSliderValues] = useState([10000, 70000]);

  const handleBrandFilter = (brand) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      brand: prevFilters.brand.includes(brand)
        ? prevFilters.brand.filter((b) => b !== brand)
        : [...prevFilters.brand, brand],
    }));
  };

  const handleRating = (rating) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      rating: prevFilters.rating.includes(rating)
        ? prevFilters.rating.filter((r) => r !== rating)
        : [...prevFilters.rating, rating],
    }));
  };

  const handleMinPriceChange = (event) => {
    const minPrice = parseInt(event.target.value);
    setSliderValues([minPrice, sliderValues[1]]);
    setFilters((prevFilters) => ({
      ...prevFilters,
      minPrice: minPrice === 0 ? "" : minPrice.toString(),
    }));
  };

  const handleMaxPriceChange = (event) => {
    const maxPrice = parseInt(event.target.value);
    setSliderValues([sliderValues[0], maxPrice]);
    setFilters((prevFilters) => ({
      ...prevFilters,
      maxPrice: maxPrice === 0 ? "" : maxPrice.toString(),
    }));
  };

  const handleSliderChange = (values) => {
    setSliderValues(values);
    setFilters((prevFilters) => ({
      ...prevFilters,
      minPrice: values[0].toString(),
      maxPrice: values[1].toString(),
    }));
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      {isMobile && (
        <Accordion defaultIndex={[1]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Filters
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack spacing={4} align="stretch">
                <Box>
                  <RangeSlider
                    aria-label={["min", "max"]}
                    defaultValue={sliderValues}
                    value={sliderValues}
                    min={10000}
                    max={70000}
                    step={10000}
                    onChange={handleSliderChange}
                  >
                    <RangeSliderTrack>
                      <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                  </RangeSlider>

                  <Flex justifyContent="space-between" mt="2">
                    <Select
                      maxH="20"
                      maxW="20"
                      placeholder="Minimum"
                      onChange={handleMinPriceChange}
                    >
                      <option value="0">min</option>
                      <option value="10000">10000</option>
                      <option value="20000">20000</option>
                      <option value="30000">30000</option>
                    </Select>
                    <Select
                      maxH="20"
                      maxW="20"
                      placeholder="Maximum"
                      onChange={handleMaxPriceChange}
                      ml={2}
                    >
                      <option value="0">max</option>
                      <option value="40000">40000</option>
                      <option value="50000">50000</option>
                      <option value="60000">60000</option>
                      <option value="70000">70000</option>
                    </Select>
                  </Flex>
                </Box>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Brand
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack spacing={2}>
                      <Checkbox onChange={() => handleBrandFilter("HP")}>
                        HP
                      </Checkbox>
                      <Checkbox onChange={() => handleBrandFilter("Canon")}>
                        Canon
                      </Checkbox>
                      <Checkbox onChange={() => handleBrandFilter("Epson")}>
                        Epson
                      </Checkbox>
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Rating
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Stack spacing={2}>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <Checkbox
                          key={num}
                          onChange={() => handleRating(num.toString())}
                        >
                          <StarIcon color="#388E3C" mr="1" />
                          {num} & above
                        </Checkbox>
                      ))}
                    </Stack>
                  </AccordionPanel>
                </AccordionItem>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      )}
      {!isMobile && (
        <Flex
          h="calc(100vh - 20px)"
          w="250px"
          bg=""
          mt="10"
          color="black"
          flexDirection="column"
          gap="5px"
        >
          <Box mb="4">
            <Text fontSize="xl" fontWeight="bold">
              Filters
            </Text>
          </Box>

          <VStack spacing="4" align="stretch">
            <Box>
              <RangeSlider
                aria-label={["min", "max"]}
                defaultValue={sliderValues}
                value={sliderValues}
                min={10000}
                max={70000}
                step={10000}
                onChange={handleSliderChange}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>

              <Flex justifyContent="space-between" mt="2">
                <Select
                  maxH="20"
                  maxW="20"
                  placeholder="Minimum"
                  onChange={handleMinPriceChange}
                >
                  <option value="0">min</option>
                  <option value="10000">10000</option>
                  <option value="20000">20000</option>
                  <option value="30000">30000</option>
                </Select>
                <Select
                  maxH="20"
                  maxW="20"
                  placeholder="Maximum"
                  onChange={handleMaxPriceChange}
                  ml={2}
                >
                  <option value="0">max</option>
                  <option value="40000">40000</option>
                  <option value="50000">50000</option>
                  <option value="60000">60000</option>
                  <option value="70000">70000</option>
                </Select>
              </Flex>
            </Box>

            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Brand
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack spacing={2}>
                    <Checkbox onChange={() => handleBrandFilter("HP")}>
                      HP
                    </Checkbox>
                    <Checkbox onChange={() => handleBrandFilter("Canon")}>
                      Canon
                    </Checkbox>
                    <Checkbox onChange={() => handleBrandFilter("Epson")}>
                      Epson
                    </Checkbox>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Rating
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack spacing={2}>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <Checkbox
                        key={num}
                        onChange={() => handleRating(num.toString())}
                      >
                        <StarIcon color="#388E3C" mr="1" />
                        {num} & above
                      </Checkbox>
                    ))}
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </VStack>
          <Divider mt="15" mb="4" />
        </Flex>
      )}
    </Box>
  );
}

export default SortByNav;
