import React, { useEffect, useState } from 'react';

import contentfulController from '../../../service/contentful/contentfulController';
import { FETCH_STATUS } from '../../../service/fetchStatus';
import useFirebaseBags from '../../../service/firebase/useFirebaseBags';

import "./shoppingBagProductDetails.css"

function ShoppingBagProductDetails({ product, updateTotalPrice }) {
    const { getProductContent } = contentfulController();
    const { updateProductQuantityInBag, deleteProductFromBag } = useFirebaseBags();

    const [content, setContent] = useState([]);
    const [status, SetStatus] = useState(FETCH_STATUS.IDLE);
    const [error, setError] = useState(null);

    let [count, setCount] = useState(product.quantity);

    const fetchData = async () => {
        try {
            SetStatus(FETCH_STATUS.LOADING);

            const response = await getProductContent(product.productId);

            if (response) {
                setContent(response[0]);
                SetStatus(FETCH_STATUS.SUCCESS);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error.message);
            SetStatus(FETCH_STATUS.ERROR);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    function incrementCount() {
        count = count + 1;
        setCount(count);
        try {
            updateProductQuantityInBag(0, product.productId, count);
            updateTotalPrice();
        } catch (error) {
            count = count - 1;
            setCount(count);
            console.error(error);
        }
    }

    function decrementCount() {
        if (count > 1) {
            count = count - 1;
            setCount(count);
            try {
                updateProductQuantityInBag(0, product.productId, count);
                updateTotalPrice();
            } catch (error) {
                count = count + 1;
                setCount(count);
                console.error(error);
            }
        } else {
            try {
                setCount(0);
                deleteProductFromBag(0, product.productId);
                updateTotalPrice();
            } catch (error) {
                console.error(error);
            }
        }
    }

    const handleChange = (event) => {
        setCount(event.target.value);
    }

    if (status === FETCH_STATUS.LOADING) {
        return <div></div>
    } else if (status === FETCH_STATUS.ERROR) {
        return <span>{error}</span>
    } else if (status === FETCH_STATUS.SUCCESS) {
        return (
            <div className="detailsContainer">
                <img src={content.images[0].file.url} alt="" />
                <div className="productInfo">
                    <h4>{content.name}</h4>
                    <p>Quantidade: {count}</p>
                </div>
                <h4>R${parseFloat(content.price) * parseFloat(count)}</h4>
                {/* botão - e + da quantidade */}
                <div className="plusMinusContainer">
                    <button onClick={decrementCount}>-</button>
                    <input type="text" value={count} onChange={handleChange} />
                    <button onClick={incrementCount}>+</button>
                </div>
            </div>
        );
    }
}

export default ShoppingBagProductDetails;