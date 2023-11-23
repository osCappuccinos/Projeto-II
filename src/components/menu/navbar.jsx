import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Importe useNavigate
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ShoppingBagDropdown from '../shoppingBag/shoppingBagDropdown/shoppingBagDropdown';
import SearchBar from "./searchbar";
import './navbar.css';

const Navbar = () => {
    const [showShoppingBag, setShowShoppingBag] = useState(false);
    const [openCartDropdown, setOpenCartDropdown] = useState(false);
    const navigate = useNavigate();
    const goToUserPage = () => {
        navigate('/Client');
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/"><img src={""} alt="Logotipo"/></Link>
            </div>
            <ul>
            <li><Link to="/">Início</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/parceiros">Parceiros</Link></li>
                <li><Link to="/ruma">A Ruma</Link></li>
             
                
                <div className="orders-and-cart">   
                <SearchBar />                 
                    <button onClick={() => setOpenCartDropdown((prev) => !prev)}><LocalMallOutlinedIcon /></button>
                    {
                        openCartDropdown && <ShoppingBagDropdown
                        itemsCount = "1"
                        cartTotal = "80.75"
                        />
                    }
                    <button onClick={goToUserPage}><PersonOutlinedIcon /></button> 
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
