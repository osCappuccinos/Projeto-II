import { Link } from 'react-router-dom';
import React, {useEffect, useState } from 'react';

const MenuDropdown = ({ visible }) => {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  return (
    <div className={`dropdown ${isVisible ? 'visible' : ''}`}>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/parceiros">Parceiros</Link></li>
        <li><Link to="/ruma">A Ruma</Link></li>
        <li><Link to="/checkout">Minha sacola</Link></li>
      </ul>
    </div>
  );
};

export default MenuDropdown;