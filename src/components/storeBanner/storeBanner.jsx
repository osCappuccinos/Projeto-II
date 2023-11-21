import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './StoreBanner.css';

const StoreBanner = ({ backgroundImage, logoImage, category, title, text, reverseOrder }) => {
    const orderClass = reverseOrder ? 'reverse-order' : '';
    return (
      <div className={`store-banner ${orderClass}`}>
        <div className="rectangle" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="circle" style={{ backgroundImage: `url(${logoImage})` }}></div>
        </div>
        <div className="store-info">
          <p className="category">{category}</p>
          <h2 className="store-title">{title}</h2>
          <p className="store-text">{text}</p>
          <button className="btn-clear">Quero conhecer!</button>
        </div>
      </div>
    );
  };
  
  export default StoreBanner;
