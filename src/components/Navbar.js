import React from 'react'
import Logo from '../assets/images/logo.svg'
import { NavLink } from 'react-router-dom';
import MenuIcon from '../components/MenuIcon';

const navbar = () => {
  return (
    <nav className="__navbar">
        <div className="container">
            <img src={Logo} alt="" />
            <div className="menu-links">
              <NavLink className="menu-link" to="/">Home</NavLink>
              <NavLink className="menu-link" to="/categories">Categories</NavLink>
              <NavLink className="menu-link" to="/products">Products</NavLink>
              <NavLink className="menu-link" to="/contacts">Contacts</NavLink>
            </div>
            <div className="menu-icons">
              <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
              <MenuIcon link="/compare" icon="fa-light fa-code-compare fa-flip-vertical" />
              <MenuIcon link="/wishlist" icon="fa-regular fa-heart" />
              <MenuIcon link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
            </div>
        </div>
    </nav>
  )
}

export default navbar