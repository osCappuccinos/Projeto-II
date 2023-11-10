import React, { useEffect, useState } from 'react';

import TopRatedProducts from '../components/algorithm/TopRatedProducts';
import { Banner } from '../components/banner/banner';
import { CardStoreGroup } from '../components/cards/cardStore/cardStoreGroup';
import { H1 } from '../components/title/titles';
import { FETCH_STATUS } from '../service/fetchStatus';
import { readAllStores } from '../service/firebase/firebaseController';

import './Products.css';

function Products() {
    const [stores, setStores] = useState(null);
    const [status, SetStatus] = useState(FETCH_STATUS.IDLE);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            SetStatus(FETCH_STATUS.LOADING);

            const response = await readAllStores();

            if (response) {
                setStores(response);
                SetStatus(FETCH_STATUS.SUCCESS);
            }
        } catch (error) {
            console.error("Error fetching stores:", error);
            setError(error.message);
            SetStatus(FETCH_STATUS.ERROR);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (status === FETCH_STATUS.LOADING) {
        return <div></div>
    } else if (status === FETCH_STATUS.ERROR) {
        return <span>{error}</span>
    } else if (status === FETCH_STATUS.SUCCESS) {
        return (
            <div className="bodyContainer">
                <Banner />
                <H1 text="Novas tendências na Ruma" />
                <CardStoreGroup stores={ stores } />
                <div className="all-container">
                    <H1 text="Produtos" />
                    <TopRatedProducts />
                </div>
            </div>
        );
    }
}

export default Products;
