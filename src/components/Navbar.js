import React from 'react'
import Logo from '../assets/images/logo.svg'

const navbar = () => {
  return (
    <nav className="__navbar">
        <div className="container">
            <img src={Logo} alt="" />
            <div>LINKS</div>
            <div>SHOP</div>
        </div>
    </nav>
  )
}

export default navbar