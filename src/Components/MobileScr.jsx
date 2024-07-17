import React, { useState } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useBreakpointValue,
} from "@chakra-ui/react";

function MobileScr({ setFilters }) {
  const [activeSort, setActiveSort] = useState("");
  const handleSortBy = (sortOrder) => {
    if (activeSort === sortOrder) {
      setActiveSort("");
      setFilters((prevFilters) => ({
        ...prevFilters,
        sortOrder: "",
      }));
    } else {
      setActiveSort(sortOrder);
      setFilters((prevFilters) => ({
        ...prevFilters,
        sortOrder,
      }));
    }
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      {isMobile ? (
        <Accordion defaultIndex={[1]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span"  >
                  Sort By
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box>
              <Button
                onClick={() => handleSortBy("asc")}
                _hover={{ bg: "blue.300", color: "white", fontWeight: "bold" }}
                bg={activeSort === "asc" ? "blue.500" : ""}
                color={activeSort === "asc" ? "white" : ""}
                mb={2}
              >
                Price - Low to High
              </Button>
              </Box>
              <Box>
              <Button
                onClick={() => handleSortBy("desc")}
                _hover={{ bg: "blue.300", color: "white", fontWeight: "bold" }}
                bg={activeSort === "desc" ? "blue.500" : ""}
                color={activeSort === "desc" ? "white" : ""}
                mb={2}
              >
                Price - High to Low
              </Button>
              </Box>
              <Button
                onClick={() => handleSortBy("createdAt")}
                _hover={{ bg: "blue.300", color: "white", fontWeight: "bold" }}
                bg={activeSort === "createdAt" ? "blue.500" : ""}
                color={activeSort === "createdAt" ? "white" : ""}
              >
                Newest First
              </Button>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ) : (
        <ButtonGroup
          variant="outline"
          size="sm"
          mt="5"
          mr="40px"
          px="15"
          ml={{ base: "0", md: "200px" }}
          color="black"
          flexWrap={{ base: "wrap", md: "nowrap" }}
        >
      <Box display="flex" alignItems="center" width="280px"> 
    <Text fontSize="xm" fontWeight="bold" ml="200px" mt="6px">
      Sort By
    </Text>
  </Box>
          <Button
            onClick={() => handleSortBy("asc")}
            _hover={{ bg: "blue.300", color: "white", fontWeight: "bold" }}
            bg={activeSort === "asc" ? "blue.500" : ""}
            color={activeSort === "asc" ? "white" : ""}
          >
            Price - Low to High
          </Button>
          <Button
            onClick={() => handleSortBy("desc")}
            _hover={{ bg: "blue.300", color: "white", fontWeight: "bold" }}
            bg={activeSort === "desc" ? "blue.500" : ""}
            color={activeSort === "desc" ? "white" : ""}
          >
            Price - High to Low
          </Button>
          <Button
            onClick={() => handleSortBy("createdAt")}
            _hover={{ bg: "blue.300", color: "white", fontWeight: "bold" }}
            bg={activeSort === "createdAt" ? "blue.500" : ""}
            color={activeSort === "createdAt" ? "white" : ""}
          >
            Newest First
          </Button>
        </ButtonGroup>
      )}
    </Box>
  );
}

export default MobileScr;
