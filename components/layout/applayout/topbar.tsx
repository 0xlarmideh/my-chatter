import React, { useState } from 'react'
import Link from 'next/link';
import { Flex, Text, Spacer, Button, Box, Container, Input, InputGroup, InputLeftElement, Heading } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const Topbar = () => {
  const [input, setInput] = useState("");

  return (
    <Box
      padding="10px 40px"
      width="100%"
      borderBottom="0.5px solid #ececec"
      mb="40px"
      position="fixed"
      zIndex="1000"
      bg="white"
    >
      <Flex w="full" alignItems="center">
        <Link href="/home">
          <Text
            fontSize="36"
            color="purple.400"
            fontWeight="medium"
            variant="h3"
          >
            Chatter
          </Text>
        </Link>
        <Spacer />
        <Box>
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon
                  icon="iconamoon:search-light"
                  color="#292D32"
                  width="24"
                />
              </InputLeftElement>
              <Input
                color="black"
                width="400px"
                variant="filled"
                onChange={(e) => setInput(e.target.value)}
              />
            </InputGroup>
          </FormControl>
        </Box>
        <Spacer />
        <Flex alignItems="center" gap="20px">
          <Link href="/posts/create">
            <Button
              display="flex"
              alignItems="center"
              px="18px"
              gap="4px"
              textTransform="capitalize"
              color="white"
              borderRadius="20px"
              border="none"
              bg="#543EE0"
            >
              <Icon icon="icon-park-outline:write" width="14" />
              Write
            </Button>
          </Link>

          {/* Bell icon to toggle ConnectNovu notification */}
          <Box>
            <Icon icon="mdi:bell-outline" width="36" />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            h="48px"
            w="48px"
            fontSize="24px"
            borderRadius="100%"
            p="0px"
            bg="cyan.100"
          >
            <Text>A</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Topbar