import React from 'react';
import logo from './Logo.png';
import Nav from './Nav'; // Import the Nav component

const Header = () => {
  return (
      <div className="logo-container">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
        <Nav />
      </div>
  )
}

export default Header;
