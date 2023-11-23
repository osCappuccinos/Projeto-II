import React from 'react';
import './CardHomeInfo.css'; // Importa o arquivo CSS

function CardHomeInfo({ icon, title, text }) {
  return (
    <div className="card-home-info">
      <div className="card-icon">{icon}</div>
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{text}</p>
    </div>
  );
}

export default CardHomeInfo;
