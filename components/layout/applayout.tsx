import { ReactNode } from "react";
import Topbar from "./applayout/topbar";
import Sidebar from "./applayout/sidebar";
import { Box, Divider, Flex } from "@chakra-ui/react";
import Rightbar from "./applayout/rightbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Topbar />

      <Sidebar />
      <Flex>
        <Box
          padding="20px 30px 20px 90px"
          width="100%"
          mb="40px"
          mt="40px"
          position="relative"
          top="40px"
          // left="40px"
          zIndex="1"
        >
          {children}
        </Box>
        <Box position="relative" top="70px" width="40px">
          <Divider color="black" h="100%" orientation="vertical" />
        </Box>

        <Rightbar />
      </Flex>
    </>
  );
};

export default Layout;
