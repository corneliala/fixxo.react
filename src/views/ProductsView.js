import React, {useState} from 'react'
import BreadcrumbSection from '../components/BreadcrumbSection';
import ProductGridSection from '../components/ProductGridSection';
import FooterSection from '../components/FooterSection';
import Navbar from '../components/Navbar';

function ProductsView() {
  
  return (
    <>
    <Navbar />
    <BreadcrumbSection currentPage="Products" />
    <ProductGridSection title="" />
    <FooterSection />
    </>
  )
}

export default ProductsView