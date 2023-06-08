import { Box, Card, CardBody, Container, Grid, Text, Wrap } from '@chakra-ui/react'
import { Icon } from "@iconify/react";
import React from 'react'

const AboutServices = () => {
  return (
    <Container maxW="1080px">
      <Text
        fontWeight="medium"
        pt={12}
        my={8}
        fontSize="36px"
        textAlign="center"
      >
        Why you should join chatter
      </Text>
      <Text>
        Our goal is to make writers and readers see our platform as their next
        heaven for blogging, ensuring ease in interactions, connecting with
        like-minded peers, have access to favorite content based on interests
        and able to communicate your great ideas with people
      </Text>
      <Grid mt="48px" gap={6} templateColumns="repeat(3,1fr)">
        <Card>
          <CardBody>
            <Wrap
              display="inline-block"
              bg="rgba(214, 209, 248, 0.2)"
              padding="16px"
              borderRadius="full"
              mb="21px"
            >
              <Icon icon="carbon:analytics" height="32" width="32" />
            </Wrap>
            <Text fontWeight="medium" mb={6} fontSize="24px">
              Analytics
            </Text>
            <Text fontSize="16px">
              Analytics to track the number of views, likes and comment and also
              analyze the performance of your articles over a period of time
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Wrap
              display="inline-block"
              bg="rgba(214, 209, 248, 0.2)"
              padding="16px"
              borderRadius="full"
              mb="21px"
            >
              <Icon
                icon="fluent:people-community-20-filled"
                width="32"
                height="32"
              />
            </Wrap>
            <Text fontWeight="medium" mb={6} fontSize="24px">
              Social interactions
            </Text>
            <Text fontSize="16px">
              Users on the platform can interact with posts they like, comment
              and engage in discussions
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Wrap
              display="inline-block"
              bg="rgba(214, 209, 248, 0.2)"
              padding="16px"
              borderRadius="full"
              mb="21px"
            >
              <Icon
                icon="fluent:content-view-24-regular"
                height="32"
                width="32"
              />
            </Wrap>
            <Text fontWeight="medium" mb={6} fontSize="24px">
              Content creation
            </Text>
            <Text fontSize="16px">
              Write nice and appealing with our in-built markdown, a rich text
              editor
            </Text>
          </CardBody>
        </Card>
      </Grid>
    </Container>
  );
}

export default AboutServices