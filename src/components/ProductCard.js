import React from 'react'

const ProductCard = () => {
  return (
<div className="col">
    <div className="card">
      <ul className="card-menu">
          <li><a href="#"><i className="fa-regular fa-heart "></i></a></li>
          <li><a href="#"><i className="fa-light fa-code-compare fa-flip-vertical"></i></a></li>
          <li><a href="#"><i className="fa-regular fa-bag-shopping "></i></a></li>
      </ul>
      <img src="images/grey-img.svg" className="card-img-top" alt="..." />
      <div className="card-background">
          <a href="#" className="btn btn-theme">QUICK VIEW</a>
      </div>
    </div>
    <div className="product-description">
      <p className="category">Category</p>
      <h1 className="product-title">Modern Black Blouse</h1>
      <div className="product-rating">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
      </div>
      <p className="price">$35.00</p>
    </div>
  </div> 
  )
}

export default ProductCard