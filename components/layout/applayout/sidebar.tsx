import { Box, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Sidebar = () => {
  const router = useRouter();
  return (
    <Box
      w="60px"
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      pt="100px"
      h="100%"
      position="fixed"
      bg="#F5F7F9"
      gap="30px"
      zIndex={1000}
    >
      <Link
        href="/home"
        className={router.pathname == "/home" ? "active-icon" : "nav-link"}
      >
        <Icon icon="iconamoon:home-light" width="21" />
      </Link>
      <Link
        href="/posts/bookmarks"
        className={
          router.pathname == "/posts/bookmarks" ? "active-icon" : "nav-link"
        }
      >
        <Icon icon="solar:bookmark-outline" width="21" />
      </Link>
      <Link
        href="/posts/drafts"
        className={
          router.pathname == "/posts/drafts" ? "active-icon" : "nav-link"
        }
      >
        <Icon icon="ri:draft-line" width="21" />
      </Link>
      <Link
        href="/posts/trending"
        className={
          router.pathname == "/posts/trending" ? "active-icon" : "nav-link"
        }
      >
        <Icon icon="icon-park-outline:trending-up" width="21" />
      </Link>
      <Link
        href="/analytics"
        className={router.pathname == "/analytics" ? "active-icon" : "nav-link"}
      >
        <Icon
          className="sidebar-icon"
          icon="carbon:analytics-custom"
          width="21"
        />
      </Link>
      <style jsx global>
        {`
          .nav-link {
            padding: 10px;
            border-radius: 8px;
          }
          .active-icon {
            padding: 10px;
            border-radius: 8px;
            background-color: #543ee0;
            color: white;
          }
          .side-bar:hover {
            cursor: pointer;
            background-color: lavender;
            transform: scale(1.1);
            transition: all 0.5s ease-in-out;
          }
          .nav-link:hover {
            cursor: pointer;
            background-color: lavender;
            transform: scale(1.1);
            transition: all 0.5s ease-in-out;
          }
        `}
      </style>
    </Box>
  );
};

export default Sidebar;
