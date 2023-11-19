import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate

import ShoppingBagDropdown from '../shoppingBag/shoppingBagDropdown/shoppingBagDropdown';
import SearchBar from "./searchbar";
import './navbar.css';

const Navbar = () => {
    const [openCartDropdown, setOpenCartDropdown] = useState(false);
    const navigate = useNavigate();
    const goToUserPage = () => {
        navigate('/user');
    };

    return (
        <nav className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <SearchBar />
                <div className="orders-and-cart">
                    <div className="profile-pic"></div>
                    <button onClick={goToUserPage}>Meus pedidos</button> 
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
