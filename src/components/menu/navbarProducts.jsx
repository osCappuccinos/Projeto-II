import React from 'react';
import './navbarProducts.css'

const NavbarProducts = () => {
 return (
    <nav className="navbarProducts">
      <ul>
        <li><a href="/produtos">Todos os departamentos</a></li>
        <li><a href="/produtos">Moda feminina</a></li>
        <li><a href="/produtos">Moda masculina</a></li>
        <li><a href="/produtos">Moda infantil</a></li>
        <li><a href="/produtos">Moda para todes</a></li>
        <li><a href="/produtos">Acessórios</a></li>
        <li><a href="/produtos">Calçados</a></li>
      </ul>
    </nav>
 );
};

export default NavbarProducts;