import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { ReactNode } from "react";
import PostImage from "/public/assets/postimage.jpg";
import Link from "next/link";
import AvatarComp from "./AvatarComp";

const HomeDetail = (): ReactNode => {
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
      tags: ["Frontend", "Svelte", "React"],
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
      tags: ["Frontend", "Svelte", "React"],
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
      tags: ["Frontend", "Svelte", "React"],
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
      tags: ["Frontend", "Svelte", "React"],
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
      tags: ["Frontend", "Svelte", "React"],
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
      tags: ["Frontend", "Svelte", "React"],
    },
  ];
  return (
    <>
      {postData.map(
        ({
          id,
          title,
          description,
          datePosted,
          author,
          role,
          tags,
          postLength,
        }) => {
          return (
            <Link href="">
              <Flex mt="30px" gap={4} alignItems="center" key={id}>
                <Box display="flex" flexDirection="column" gap="5px">
                  <Box>
                    <Flex alignItems="center" gap={2}>
                      <AvatarComp children={author[0]} />
                      
                      <Flex fontWeight={400} gap={2} fontSize="14px">
                        <Text>{author} </Text>
                        <Text color="grey">|| </Text>
                        <Text>{role} </Text>
                        <Text color="grey">{datePosted} </Text>
                      </Flex>
                    </Flex>
                  </Box>
                  <Text fontWeight="700" fontSize="24px" variant="h3">
                    {title}{" "}
                  </Text>

                  <Text fontSize="16px">{description} </Text>
                </Box>
                <Box>
                  <Image
                    loading="lazy"
                    src={PostImage}
                    width={400}
                    height={400}
                    alt="Image of thhe post"
                  ></Image>
                </Box>
              </Flex>
              <Flex gap={2}>
                <Flex
                  fontSize="14px"
                  fontWeight={400}
                  gap={16}
                  alignItems="center"
                  my="30px"
                  mb="40px"
                >
                  <Flex alignItems="center" gap="6px">
                    {tags.map((tag) => {
                      return (
                        <Link href={`/${id}`}>
                          <Box
                            bg="#F5F7F9"
                            px="14px"
                            py="4px"
                            borderRadius="12px"
                          >
                            {tag}
                          </Box>
                        </Link>
                      );
                    })}
                    <Text color="grey">{postLength} </Text>
                  </Flex>

                  <Flex gap={2}>
                    <Icon icon="iconamoon:bookmark-thin" width={21} />
                    <Icon icon="ph:hands-clapping-thin" width={21} />
                  </Flex>
                </Flex>
              </Flex>
              <Divider />
            </Link>
          );
        }
      )}
    </>
  );
};

export default HomeDetail;
