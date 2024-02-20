import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import HamburgerMenu from '../HamburgerMenu';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <HamburgerMenu />
      {children}
      <Footer />
    </>
  );
}

export default React.memo(Layout);
