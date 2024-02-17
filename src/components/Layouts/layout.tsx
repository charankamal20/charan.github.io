import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Layout({children} : { children: React.ReactNode }) {

  return (
    <main className=''>
        <Navbar />
        {children}
        <Footer />
    </main>
  )
}

export default Layout;