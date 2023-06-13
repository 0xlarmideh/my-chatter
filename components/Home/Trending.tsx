import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import AvatarComp from './AvatarComp'

const Trending = () => {
  const postData = [
    {
      id: 1,
      title: "Apple Vision Pro laudantium placeat repellendus sed 1",
      author: "Anonymous",
      
    },
    {
      id: 2,
      title: "Apple Vision Pro 2 repellendus sed consequatur",
      author: "Anonymous",
    },
    {
      id: 3,
      title: "Apple Vision Pro 3 m ipsum dolor sit amet consectetur",
      author: "Anonymous",
    },
  ];

  return (
    <Box>
      <Heading mb="20px" as="h5" size="sm">
        Trending
      </Heading>
      {postData.map(({ author, title }) => {
        return (
          <Box className="neumorphic" p={4} mb="10px">
            <Flex mb="10px" gap={2} alignItems="center">
              {/* Author Details */}
              <AvatarComp children="A" />
              <Text fontSize={12}>{author} </Text>
            </Flex>
            <Heading mb="10px" as="h3" size="sm">
              {title}
            </Heading>
          </Box>
        );
      })}
      <style jsx global>
        {`
          .neumorphic {
            background: #ffffff;
            box-shadow: 6px 6px 20px #ededed, -6px -6px 20px #ffffff;
            border-radius: 10px;
          }
        `}
      </style>
    </Box>
  );
}

export default Trending