import React from 'react'
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import FooterSection from '../components/FooterSection';
import ProductGridSection from '../components/ProductGridSection';
import TopPicksSection from '../components/TopPicksSection';
import FlashsaleSection from '../components/FlashsaleSection';

const HomeView = () => {
  window.top.document.title ='Fixxo.'
  
  return (
    <>
      <Navbar />
      <Showcase />
      <ProductGridSection title="Featured Products" />
      <TopPicksSection />
      <FlashsaleSection />
      <FooterSection />
      
      

    </>
  )
}

export default HomeView;