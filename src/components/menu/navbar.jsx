import React, { useEffect, useState } from 'react';

import ShoppingBagDropdown from '../shoppingBag/shoppingBagDropdown/shoppingBagDropdown';
import SearchBar from "./searchbar";

import './navbar.css'
import '../../themes.css'
import accountIcon from '../icons/accounticon.png';

const Navbar = () => {
  const [openCartDropdown, setOpenCartDropdown] = useState(false)
 return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <SearchBar />
        <div className="orders-and-cart">
          <img className="profile-pic" src={accountIcon} alt="" />
          <button className='btn1'>Meus pedidos</button>
          <button className='btn2' onClick={() => setOpenCartDropdown((prev) => !prev)}>Minha sacola</button>
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