import React, { useEffect, useState } from 'react';

import contentfulController from '../../../service/contentful/contentfulController';
import { FETCH_STATUS } from '../../../service/fetchStatus';
import useFirebaseBags from '../../../service/firebase/useFirebaseBags';
import ShoppingBagProductDetails from "../shoppingBagProductDetails/shoppingBagProductDetails";

import "./shoppingBagDropdown.css"

function ShoppingBagDropdown(props) {
    const { readBag } = useFirebaseBags();
    const { getProductContent } = contentfulController();

    const [bag, setBag] = useState([]);
    const [status, SetStatus] = useState(FETCH_STATUS.IDLE);
    const [error, setError] = useState(null);

    const [itemsString, setItemsString] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const updateTotalPrice = async () => {
        const response = await readBag(0);
    
        if (response) {
            setBag(response);

            const productPromises = Object.keys(response).map(async (productKey) => {
                const product = await getProductContent(productKey);
                return { ...product[0], quantity: response[productKey].quantity };
            });

            const products = await Promise.all(productPromises);
            const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);

            setTotalPrice(totalPrice);
        }
    };
    
    const fetchData = async () => {
        try {
            SetStatus(FETCH_STATUS.LOADING);
    
            const response = await readBag(0);
    
            if (response) {
                updateTotalPrice();
                SetStatus(FETCH_STATUS.SUCCESS);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error.message);
            SetStatus(FETCH_STATUS.ERROR);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        updateTotalPrice();
    }, [updateTotalPrice])

    useEffect(() => {
        if (Object.keys(bag).length > 1) {
            setItemsString('items')
        } else {
            setItemsString('item')
        }
    }, [Object.keys(bag).length])

    if (status === FETCH_STATUS.LOADING) {
        return <div></div>
    } else if (status === FETCH_STATUS.ERROR) {
        return <span>{error}</span>
    } else if (status === FETCH_STATUS.SUCCESS) {

        return (
            <div className="dropdownContainer">
                <div className="summary">
                    <h3>Resumo</h3>
                    <p>{Object.keys(bag).length} {itemsString}</p>
                </div>
                {
                    Object.keys(bag).map((proudctKey) => (
                        <ShoppingBagProductDetails key={proudctKey} product={bag[proudctKey]} updateTotalPrice={updateTotalPrice} />
                    ))
                }
                <div className="total">
                    <h4>Total</h4>
                    <h4>R${totalPrice}</h4>
                </div>
                <button className="goToCart">Ir para minha sacola</button>
            </div>
        );
    }
}

export default ShoppingBagDropdown;