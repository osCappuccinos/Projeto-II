import React, { useEffect, useState } from 'react';

import TopRatedProducts from '../components/algorithm/TopRatedProducts';
import { Banner } from '../components/banner/banner';
import { CardStoreGroup } from '../components/cards/cardStore/cardStoreGroup';
import { H1, H2 } from '../components/title/titles';
import { FETCH_STATUS } from '../service/fetchStatus';
import useFirebaseStores from '../service/firebase/useFirebaseStores';

import './Products.css';
import '../../src/themes.css';

function Products() {
    const { readAllStores } = useFirebaseStores();

    const [stores, setStores] = useState(null);
    const [status, setStatus] = useState(FETCH_STATUS.IDLE);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setStatus(FETCH_STATUS.LOADING);

            const response = await readAllStores();

            if (response) {
                setStores(response);
                setStatus(FETCH_STATUS.SUCCESS);
            }
        } catch (error) {
            console.error("Error fetching stores:", error);
            setError(error.message);
            setStatus(FETCH_STATUS.ERROR);
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
            <div className="bodyContainer-products">
                <Banner />
                <H2 id="coloredText" text="Novas tendências na Ruma" />
                <CardStoreGroup stores={stores} />
                <div className="all-container">
                    <H2 id="coloredText" text="Ofertas especiais" />
                    <TopRatedProducts />
                </div>
            </div>
        );
    }
}

export default Products;
