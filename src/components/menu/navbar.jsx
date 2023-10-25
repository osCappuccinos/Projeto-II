import React from 'react';
import './navbar.css'

const Navbar = () => {
 return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">Meus pedidos</a></li>
        <li><a href="/">Minha sacola</a></li>
      </ul>
    </nav>
 );
};

export default Navbar;