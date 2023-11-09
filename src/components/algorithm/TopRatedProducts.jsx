import React, { useEffect, useState } from 'react';

import { FETCH_STATUS } from '../../service/fetchStatus';
import { fetchTopRatedProducts } from '../../service/firebase/firebaseController';
import { CardProductGroup } from '../cards/cardProduct/cardProductGroup';

import './TopRatedProducts.css';

function TopRatedProducts() {
    const [products, setProducts] = useState([]);
    const [status, SetStatus] = useState(FETCH_STATUS.IDLE);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
            SetStatus(FETCH_STATUS.LOADING);

            const response = await fetchTopRatedProducts(8);

            if (response) {
                setProducts(response);
                SetStatus(FETCH_STATUS.SUCCESS);
            }
        } catch (error) {
            console.error("Error fetching top products:", error);
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (status === FETCH_STATUS.LOADING) {
        return <div></div>
    } else if (status === FETCH_STATUS.ERROR) {
        return <span>{error}</span>
    } else if (status === FETCH_STATUS.SUCCESS) {
        return (
            <div>
                <CardProductGroup products={products} />
            </div>
        );
    }
}

export default TopRatedProducts;
