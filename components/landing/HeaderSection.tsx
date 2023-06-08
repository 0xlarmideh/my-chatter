import React from 'react'
import { Box, Container, Flex, Heading, Button, } from '@chakra-ui/react'

const HeaderSection = () => {
  return (
    <Container maxW="1280px" p="40px 10px">
      <Flex alignItems="center" gap="6">
        <Box>
          <Heading fontWeight="normal" fontSize={54} mb="36px">
            Welcome to Chatter: A haven for blog articles
          </Heading>
          <Button  fontSize="18px" bg="purple.500" padding="21px 25px" textColor="white">
            Get Started
          </Button>
        </Box>
      </Flex>
      
    </Container>
  );
}

export default HeaderSection