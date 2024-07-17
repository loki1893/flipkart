import React from 'react'
import { useState } from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Text,
  } from "@chakra-ui/react";

function SortFiletrs({setFilters}) {
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
  return (
    
        <Box  display={{base: 'none', md:'unset'}}>
        <ButtonGroup
          variant="outline"
          size="sm"
          mt="5"
          px="15"
          ml={{ base: "0", md: "200px" }}
          color="black"
          flexWrap={{ base: "wrap", md: "nowrap" }}
        >
          <Text fontSize="sm" mt="6px" fontWeight="bold" whiteSpace="nowrap" mr="2">
            Sort By
          </Text>
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
      </Box>
    
  )
}

export default SortFiletrs;