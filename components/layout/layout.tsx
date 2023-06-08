import Navbar from './navbar'
import Footer from './footer'
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout