import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const AvatarComp = ({children}: LayoutProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="30px"
      w="30px"
      fontSize="18px"
      borderRadius="100%"
      p="0px"
      bg="cyan.100"
    >
      <Text>{children} </Text>
    </Box>
  );
}

export default AvatarComp