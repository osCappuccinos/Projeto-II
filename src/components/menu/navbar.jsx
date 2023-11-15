import React, { useEffect, useState } from 'react';

import ShoppingBagDropdown from '../shoppingBag/shoppingBagDropdown/shoppingBagDropdown';
import SearchBar from "./searchbar";

import './navbar.css'
import '../../themes.css'

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