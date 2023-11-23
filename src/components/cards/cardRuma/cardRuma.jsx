import React from 'react';
import './cardRuma.css';

const CardRuma = ({ img, title, description }) => {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <div className='title'>{title}</div>
      <div className='description'>{description}</div>
    </div>
  );
};

export default CardRuma;