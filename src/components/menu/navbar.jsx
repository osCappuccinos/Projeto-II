import React, { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ShoppingBagDropdown from '../shoppingBag/shoppingBagDropdown/shoppingBagDropdown';
import SearchBar from "./searchbar";
import './navbar.css';
import {FaBars} from "react-icons/fa"
import MenuDropdown from './menuDropdown';

const Navbar = () => {
    const [openCartDropdown, setOpenCartDropdown] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();
    const goToUserPage = () => {
        navigate('/Client');
    };
    const navRef = useRef();


    return (
        <div className="navbars-container">
            <nav className="navbar" ref={navRef}>
                <div className="logo">
                    <Link to="/"><img src={"https://images.ctfassets.net/kw4ib93qcl5n/55Hm6Xvw8xnCJfeDazxZA1/bef4769f737f2989f2fba298d5c07c16/ruma.png"} alt="Logotipo"/></Link>
                </div>
                <ul>
                    <li className="main-nav-li"><Link to="/">Início</Link></li>
                    <li className="main-nav-li"><Link to="/produtos">Produtos</Link></li>
                    <li className="main-nav-li"><Link to="/parceiros">Parceiros</Link></li>
                    <li className="main-nav-li"><Link to="/ruma">A Ruma</Link></li>
                    <div className="orders-and-cart">   
                        <SearchBar />                 
                        <button className="cart-btn" onClick={() => setOpenCartDropdown((prev) => !prev)}><LocalMallOutlinedIcon /></button>
                        {
                            openCartDropdown && <ShoppingBagDropdown
                            itemsCount = "1"
                            cartTotal = "80.75"
                            />
                        }
                        <button className="user-btn" onClick={goToUserPage}><PersonOutlinedIcon /></button>
                        <button className="menuicon" onClick={() => setDropdownVisible(!dropdownVisible)}><FaBars/></button> 
                        <MenuDropdown visible={dropdownVisible} />
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
