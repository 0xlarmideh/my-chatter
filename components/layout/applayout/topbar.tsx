import React from 'react'
import Link from 'next/link';
import { Flex, Text, Spacer, Button, Box, Container } from "@chakra-ui/react";

const Topbar = () => {
  return (
    <Box
      padding="10px 40px"
      width="100%"
      borderBottom=".1px solid #ececec"
      mb="40px"
    >
      <Flex>
        <Link href="/home">
          <Text fontSize="36" color="purple.400" fontWeight="medium" variant="h3">
            Chatter
          </Text>
        </Link>

        <Spacer />
      </Flex>
    </Box>
  );
}

export default Topbar