import React, {useContext} from 'react'
import ProductCard from './ProductCard'
import  { ProductContext } from '../contexts/contexts'

function ProductGridSection({title}) {

  const products = useContext(ProductContext)
  return (
 
    <section className="product-grid">
        <div className="container">
            <div className="product-title">
                <h1>{title}</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                  products.map(product => <ProductCard key={product.id} product={product} /> )
                }
            </div>
        </div> 
    </section>
  )
}

export default ProductGridSection