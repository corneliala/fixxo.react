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
              <NavLink className="menu-link" to="/" end>Home</NavLink>
              <NavLink className="menu-link" to="/categories" end>Categories</NavLink>
              <NavLink className="menu-link" to="/products" end>Products</NavLink>
              <NavLink className="menu-link" to="/contacts" end>Contacts</NavLink>
            </div>
            <div className="menu-icons">
              <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
              <MenuIcon link="/compare" icon="fa-light fa-code-compare fa-flip-vertical" />
              <MenuIcon quantity={2} link="/wishlist" icon="fa-regular fa-heart" />
              <MenuIcon quantity={3} link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
            </div>
        </div>
    </nav>
  )
}

export default navbar