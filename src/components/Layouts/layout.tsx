import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import HamburgerMenu from '../HamburgerMenu';

function Layout({children} : { children: React.ReactNode }) {

  return (
    <main className=''>
        <Navbar />
        <HamburgerMenu />
        {children}
        <Footer />
    </main>
  )
}

export default Layout;