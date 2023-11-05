import React from 'react';
import "./TopCard.css";

function TopCard({ id, title, image, price }) {
    const uri = '/produtos/' + title;
    
    return (
        <div className="card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>R${price}</p>
            <button><a href={uri}>Comprar</a></button>
        </div>
    );
}

export default TopCard;
