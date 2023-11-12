import React, { useEffect, useState } from 'react';
import "./Checkout1.css"
import ShoppingBagProductDetails from '../../components/shoppingBagProductDetails/shoppingBagProductDetails';
import ShippingInfoCheckout from '../../components/shippingInfoCheckout/shippingInfoCheckout';
import ProductPriceCheckout from '../../components/productPriceCheckout/productPriceCheckout';

const Checkout1 = (props) => {

    return (
        <div className="container">
            <h2>Minha sacola</h2>
            <div className="checkout-container">
                <div className="smaller-container">
                    <ShoppingBagProductDetails
                    itemsCount="1"
                    price="80.75"
                    name="Bolsa Clutch Azul"
                    image={'https://photos.enjoei.com.br/clutch-michael-kors-couro-92532468/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82NDY4MzcvNWViODY4ZGIwYmI0MDE5YmRkZDk2NGEzYzJlYTRkMTcuanBn'}
                    />
                    <ShippingInfoCheckout/>
                    <ProductPriceCheckout 
                        className="total-details"
                        price="80.75"
                        installments="5"
                    />
                    <button><a href='/checkout2/'>Continuar pedido</a></button>
                </div>
                <p className="keep-buying">Continuar comprando</p>

            </div>
        </div>
    );
}

export default Checkout1;