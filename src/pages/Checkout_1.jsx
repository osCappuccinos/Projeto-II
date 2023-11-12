import React, { useEffect, useState } from 'react';
import "./Checkout_1.css"
import ShoppingBagProductDetails from '../components/shoppingBagProductDetails/shoppingBagProductDetails';
import ShippingInfo from '../components/shippingInfo/shippingInfo';
import ProductPrice from '../components/productPrice/productPrice';

const Checkout_1 = (props) => {

    return (
        <div className="container">
            <h2>Minha sacola</h2>
            <div className="checkout-container">
                <ShoppingBagProductDetails
                itemsCount="1"
                price="80.75"
                name="Bolsa Clutch Azul"
                image={'https://photos.enjoei.com.br/clutch-michael-kors-couro-92532468/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82NDY4MzcvNWViODY4ZGIwYmI0MDE5YmRkZDk2NGEzYzJlYTRkMTcuanBn'}
                />
                <ShippingInfo/>
                <ProductPrice 
                    className="total-details"
                    price="80.75"
                    installments="5"
                />
                <button>Continuar pedido</button>
            </div>
        </div>
    );
}

export default Checkout_1;