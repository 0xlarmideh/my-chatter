import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Image from "next/image";
import { Icon } from '@iconify/react';
import { ReactNode } from "react";
import PostImage from "/public/assets/postimage.jpg"
import Link from 'next/link';

const PostDetail = ():ReactNode => {
  const postData = [
    {
      id: 1,
      title: "Post 1",
      author: "Author 1",
      role: "Photographer",
      postLength: "10min read",
      datePosted: "1 day ago",
      description:
        "This is post 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, earum? Nulla voluptate assumenda commodi laudantium placeat repellendus sed consequatur eius!",
      postImage: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      title: "Post 1",
      author: "Author 1",
      role: "Photographer",
      postLength: "10min read",
      datePosted: "1 day ago",
      description:
        "This is post 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, earum? Nulla voluptate assumenda commodi laudantium placeat repellendus sed consequatur eius d hdhbn enmd bceh dne ddvdes de  sjde s md neshdbe de h hadn m smn d d mcnd n !",
      postImage: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      title: "Post 1",
      author: "Author 1",
      role: "Photographer",
      postLength: "10min read",
      datePosted: "1 day ago",
      description:
        "This is post 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, earum? Nulla voluptate assumenda commodi laudantium placeat repellendus sed consequatur eius!",
      postImage: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      title: "Post 1",
      author: "Author 1",
      role: "Photographer",
      postLength: "10min read",
      datePosted: "1 day ago",
      description:
        "This is post 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, earum? Nulla voluptate assumenda commodi laudantium placeat repellendus sed consequatur eius!",
      postImage: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      title: "Post 1",
      author: "Author 1",
      role: "Photographer",
      postLength: "10min read",
      datePosted: "1 day ago",
      description:
        "This is post 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, earum? Nulla voluptate assumenda commodi laudantium placeat repellendus sed consequatur eius!",
      postImage: "https://picsum.photos/200/300",
    },
    {
      id: 6,
      title: "Post 1",
      author: "Author 1",
      role: "Photographer",
      postLength: "10min read",
      datePosted: "1 day ago",
      description:
        "This is post 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, earum? Nulla voluptate assumenda commodi laudantium placeat repellendus sed consequatur eius!",
      postImage: "https://picsum.photos/200/300",
    },
  ];
  return (
    <>
      {postData.map(({id, title, description, datePosted, author, role, postLength }) => {
        return (
          <Link href="">
            <Grid
              bg="#F5F7F9"
              padding="12px"
              templateColumns="1fr 1.2fr"
              borderRadius="12px"
              gap={4}
              border={ "2px solid transparent" }
              _hover={{ border: "2px solid cyan", transition: "1s" }}
              key={id}
            >
              <Box borderRadius="30px">
                <Image
                  loading="lazy"
                  src={PostImage}
                  alt="Image of thhe post"
                ></Image>
              </Box>
              <Box display="flex" flexDirection="column" gap={4}>
                <Flex justifyContent="space-between">
                  <Flex gap={2}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      h="30px"
                      w="30px"
                      fontSize="24px"
                      borderRadius="100%"
                      p="0px"
                      bg="cyan.100"
                    >
                      <Text>{author[0]} </Text>
                    </Box>
                    <Box>
                      <Text fontSize="14px">{author} </Text>
                      <Text fontSize="11px">{role} </Text>
                    </Box>
                  </Flex>
                  <Icon icon="solar:bookmark-outline" width="28" />
                </Flex>
                <Text fontWeight="500" fontSize="27px" variant="h3">
                  {title}{" "}
                </Text>
                <Flex fontSize="11px" gap={12}>
                  <Text>{postLength} </Text>
                  <Text>{datePosted} </Text>
                </Flex>
                <Text fontSize="16px">{description} </Text>
              </Box>
            </Grid>
          </Link>
        );
      })}
    </>
  );
}

export default PostDetail