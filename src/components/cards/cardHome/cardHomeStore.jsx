import React from 'react';
import { Link } from 'react-router-dom';
import './CardHomeStore.css'; // Importa o arquivo CSS

function CardHomeStore({ logo, path }) {

    const handleButtonClick = () => {
        console.log('Botão clicado!');
    };

    return (
      <div className="card">
        <div className="card-logo">
          <img src={logo} alt={`Logo da Loja`} />
        </div>
        <Link to={path} className="card-button">Conhecer</Link>
      </div>
    );
  }

export default CardHomeStore;
