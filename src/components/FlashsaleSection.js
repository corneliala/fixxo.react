import React, {useContext} from 'react'
import ProductCard from './ProductCard'
import  { ProductContext } from '../contexts/contexts'

function FlashsaleSection() {
const products = useContext(ProductContext)
  return (
    <>
    <section className="flashsale-left container">
    <div className="flashsale-box">
      <h1>2 FOR USD $29</h1>
      <a href="#" className="btn btn-white">FLASH SALE</a>
    </div>
    <section className="product-grid">
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                  products.map(product => <ProductCard key={product.id} product={product} /> )
                }
            </div>
        </div> 
    </section>
    </section>

    <section className="flashsale-right container">
    <section className="product-grid">
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                  products.map(product => <ProductCard key={product.id} product={product} /> )
                }
            </div>
        </div> 
    </section>
    <div className="flashsale-box">
      <h1>2 FOR USD $29</h1>
      <a href="#" className="btn btn-white">FLASH SALE</a>
    </div>
    
    </section>
    
    </>



  )
}

export default FlashsaleSection