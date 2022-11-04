import React from 'react'
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import FooterSection from '../components/FooterSection';
import ProductGridSection from '../components/ProductGridSection';

const HomeView = () => {
  return (
    <>
      <Navbar />
      <Showcase />
      <ProductGridSection />
      <FooterSection />

    </>
  )
}

export default HomeView;