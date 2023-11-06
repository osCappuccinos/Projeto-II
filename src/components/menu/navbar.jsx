import './navbar.css'
import React, { useEffect, useState } from 'react';
import ShoppingBagDropdown from '../shoppingBagDropdown/shoppingBagDropdown';
import SearchBar from "./searchbar";

const Navbar = () => {
  const [openCartDropdown, setOpenCartDropdown] = useState(false)
 return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <SearchBar />
        <div className="orders-and-cart">
          <div className="profile-pic"></div>
          <button>Meus pedidos</button>
          <button onClick={() => setOpenCartDropdown((prev) => !prev)}>Minha sacola</button>
          {
            openCartDropdown && <ShoppingBagDropdown
            itemsCount = "1"
            cartTotal = "80.75"
          />
          }
        </div>
      </ul>
    </nav>
 );
};

export default Navbar;