import React, { useEffect, useState } from 'react';
import Card from '../components/card/card';
import { readProduct } from '../service/firebaseController';
import "./Products.css";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        readProduct('product456', (error, data) => {
            setProducts(data);
        });
    })

    return (
        <div className='produtos-container'>
            <h1 className='produtos-title'>Produtos</h1>
            <div className="card-grid">
                <Card 
                title = {products.productName}
                id = {products.productId} />
            </div>
        </div>
    );
}

export default Products;