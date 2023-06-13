import { Grid, GridItem, Box, Text, Flex } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box bg="#FFEDCC" padding="40px 40px 80px 40px" mt="40px" width="100%">
      <Grid templateColumns="repeat(4,1fr)" gap="4">
        <GridItem>
          <Text fontWeight="medium" fontSize="36px">
            Chatter
          </Text>
        </GridItem>
        <GridItem>
          <Box marginBottom="21px">
            <Text fontWeight="bold" fontSize="20px">
              Explore
            </Text>
          </Box>
          <Flex flexDirection="column" gap="2">
            <Text>Community</Text>
            <Text>Trending tags</Text>
            <Text>Chatter for community</Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Box marginBottom="21px">
            <Text fontWeight="bold" fontSize="20px">
              Support
            </Text>
          </Box>
          <Flex flexDirection="column" gap="2">
            <Text>Docs</Text>
            <Text>Join Slack</Text>
            <Text>Contact</Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Box marginBottom="21px">
            <Text fontWeight="bold" fontSize="20px">
              Official Blog
            </Text>
          </Box>
          <Flex flexDirection="column" gap="2">
            <Text>Official blog</Text>
            <Text>Support blog</Text>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
