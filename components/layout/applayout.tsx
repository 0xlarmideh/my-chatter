import { ReactNode } from "react";
import Topbar from "./applayout/topbar";
import Sidebar from "./applayout/sidebar";
import { Box } from "@chakra-ui/react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Topbar />
      <Sidebar />
      <Box
      padding="20px 40px"
      width="100%"
      mb="40px"
      position="relative"
      top="100px"
      left="120px"
      zIndex="1"
    >{children}</Box >

    </>
  );
};

export default Layout;
