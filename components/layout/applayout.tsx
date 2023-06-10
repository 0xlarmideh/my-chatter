import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <h1>Building</h1>
      {children}

    </>
  );
};

export default Layout;
