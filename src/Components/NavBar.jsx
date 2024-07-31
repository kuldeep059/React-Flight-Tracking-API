import React, { useState } from 'react';
import logo from '../Images/logo.png';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#aboutus">About Us</a>
        <a href="#destinations">Destinations</a>
        <a href="#tickets">Tickets</a>
        <a href="#pages">Pages</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="nav-right">
        <button className="signin-btn">Sign In</button>
        <button className="menu-btn" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
