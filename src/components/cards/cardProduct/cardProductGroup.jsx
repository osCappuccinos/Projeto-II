import React from 'react';

import CardProduct from './cardProduct';

import '../cards.css'

const CardProductGroup = ({ products }) => (
    <div className="card-group">
        {
            Object.keys(products).map((proudctKey) => (
                <CardProduct key={proudctKey} product={products[proudctKey]} />
            ))
        }
    </div>
)

export { CardProductGroup };