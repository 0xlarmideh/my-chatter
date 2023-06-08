import { Flex, Text, Spacer, Button, Box, Container } from '@chakra-ui/react'

import React from 'react'
import Link from 'next/link';

const Navbar = (): React.JSX.Element => {
  return (
    <Box
      padding="10px 40px"
      width="100%"
      borderBottom=".1px solid #ececec"
      mb="40px"
    >
      <Flex alignItems="center">
        <Link href="/">
          <Text fontSize="36" fontWeight="medium" variant="h3">
            Chatter
          </Text>
        </Link>

        <Spacer />
        <Flex fontSize="18px" gap="4">
          <Link href="#about">About</Link>
          <Link href="#contact-us">Contact Us</Link>
          <Link href="#blogs">Blogs</Link>
        </Flex>
        <Spacer />
        <Flex gap="4">
          <Link href="/auth">
            <Button
              borderColor="blue.700"
              textColor="blue.700"
              colorScheme="white"
            >
              Login
            </Button>
          </Link>
          <Link href="/auth">
            <Button textColor="white" bg="purple.500">
              Signup
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar