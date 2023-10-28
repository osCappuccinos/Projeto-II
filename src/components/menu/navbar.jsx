import React from 'react';
import './navbar.css'

const Navbar = () => {
 return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <div className="search-bar"></div>
        <div className="orders-and-cart">
          <div className="profile-pic"></div>
          <button>Meus pedidos</button>
          <button>Sacola</button>
        </div>
      </ul>
    </nav>
 );
};

export default Navbar;