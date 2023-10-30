import React from 'react';
import './navbarProducts.css'

import { logEvent } from "firebase/analytics";
import { analytics } from '../../service/firebase-config'; 

function handleLinkClick(e, path, label) {
  e.preventDefault();

  logEvent(analytics, 'select_content', {
    content_type: 'nav_link',
    content_id: label
  });

  window.location.href = path;
}


const NavbarProducts = () => {
  return (
    <nav className="navbarProducts">
      <ul>
        <li><a href="/produtos" onClick={(e) => handleLinkClick(e, '/produtos', 'Todos os departamentos')}>Todos os departamentos</a></li>
        <li><a href="/produtos" onClick={(e) => handleLinkClick(e, '/produtos', 'Moda feminina')}>Moda feminina</a></li>
        <li><a href="/produtos" onClick={(e) => handleLinkClick(e, '/produtos', 'Moda masculina')}>Moda masculina</a></li>
        <li><a href="/produtos" onClick={(e) => handleLinkClick(e, '/produtos', 'Moda infantil')}>Moda infantil</a></li>
        <li><a href="/produtos" onClick={(e) => handleLinkClick(e, '/produtos', 'Moda para todes')}>Moda para todes</a></li>
        <li><a href="/produtos" onClick={(e) => handleLinkClick(e, '/produtos', 'Acessórios')}>Acessórios</a></li>
        <li><a href="/produtos" onClick={(e) => handleLinkClick(e, '/produtos', 'Calçados')}>Calçados</a></li>
      </ul>
    </nav>
);

};

export default NavbarProducts;