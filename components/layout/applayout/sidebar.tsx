import { Box, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      w="100px"
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      pt="100px"
      h="100%"
      position="fixed"
      bg="#F5F7F9"
      gap="40px"
    >
      <Link href="/home">
        <Icon icon="iconamoon:home-light" width="36" />
      </Link>

      <Link className="p-4 rounded-[6px] bg-purpul-500 " href="/bookmarks">
        <Icon icon="solar:bookmark-outline" width="36" />
      </Link>

      <Link href="/drafts">
        <Icon icon="ri:draft-line" width="36" />
      </Link>

      <Link href="/trending">
        <Icon icon="icon-park-outline:trending-up" width="36" />
      </Link>

      <Link href="/analytics">
        <Icon icon="carbon:analytics-custom" width="36" />
      </Link>
    </Box>
  );
};

export default Sidebar;
