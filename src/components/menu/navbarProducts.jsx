import React from 'react';
import './navbarProducts.css'
import SocialMediaIcons from '../icons/socialmediaicons';

const NavbarProducts = () => {
 return (
    <nav className="navbarProducts">
      <ul>
        <li><a href="/">Todos os departamentos</a></li>
        <li><a href="/categorias/moda-feminina">Moda feminina</a></li>
        <li><a href="/categorias/moda-masculina">Moda masculina</a></li>
        <li><a href="/categorias/moda-infantil">Moda infantil</a></li>
        <li><a href="/categorias/moda-para-todes">Moda para todes</a></li>
        <li><a href="/categorias/acessorios">Acessórios</a></li>
        <li><a href="/categorias/calçados">Calçados</a></li>
      </ul>
    </nav>
 );
};

export default NavbarProducts;