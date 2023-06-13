import React from 'react'
import {
  Box
} from "@chakra-ui/react";
import Trending from '../../Home/Trending';

const Rightbar = () => {
  return (
    <Box w="500px" mr="20px" mt="100px"  p="20px" pl="0px" pr="15px"  h="100%">
      <Trending />
    </Box>
  );
}

export default Rightbar