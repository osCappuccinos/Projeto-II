import React, { useEffect, useState } from 'react';

import DeliveryInfoCheckout from "../../components/deliveryInfoCheckout/deliveryInfoCheckout";
import ProductPriceCheckout from '../../components/productPriceCheckout/productPriceCheckout';
import contentfulController from '../../service/contentful/contentfulController';
import { FETCH_STATUS } from '../../service/fetchStatus';
import useFirebaseBags from '../../service/firebase/useFirebaseBags';

import "./Checkout2.css"

const Checkout2 = (props) => {
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
            <div className="container-checkout2">
                <h2>Minha sacola</h2>
                <div className="checkout-container">
                    <DeliveryInfoCheckout bag={bag} updateTotalPrice={updateTotalPrice}/>
                    <ProductPriceCheckout
                        className="total-details"
                        price={totalPrice}
                        installments="5"
                    />
                </div>
            </div>
        );
    }
}

export default Checkout2;