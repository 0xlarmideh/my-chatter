import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import AboutServices from "./AboutServices";

const AboutSection = () => {
  return (
    <Container my="27px" maxW="1280px" p="40px 40px">
      <Grid templateColumns="1fr 0.7fr" alignItems="center" gap="16">
        <GridItem>
          <Text fontWeight="medium" mb={8} fontSize="36px">
            About Chatter
          </Text>
          <Text lineHeight={8} fontSize="18px">
            Chatter is a multi-functional platform where authors and readers can
            have access to their own content. It aims to be a traditional
            bookworm’s heaven and a blog to get access to more text based
            content. Our vision is to foster an inclusive and vibrant community
            where diversity is celebrated. We encourage open-mindedness and
            respect for all individuals, regardless of their backgrounds or
            beliefs. By promoting dialogue and understanding, we strive{" "}
          </Text>
        </GridItem>
        <GridItem>
          <Box borderRadius={8} bg="#ececec" width="100%" height="300px"></Box>
        </GridItem>
      </Grid>
      <AboutServices />
    </Container>
  );
};

export default AboutSection;
