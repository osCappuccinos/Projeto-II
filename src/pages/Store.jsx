import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";

import { CardProductGroup } from "../components/cards/cardProduct/cardProductGroup";
import StoreHeader from '../components/storeHeader/storeHeader';
import { FETCH_STATUS } from "../service/fetchStatus";
import useFirebaseStores from "../service/firebase/useFirebaseStores"

function Store() {
    const { id } = useParams();
    const { readStore } = useFirebaseStores();

    const [products, setProducts] = useState([]);
    const [store, setStore] = useState([]);
    const [status, setStatus] = useState(FETCH_STATUS.IDLE);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setStatus(FETCH_STATUS.LOADING);

            const response = await readStore(id);

            if (response) {
                setStore(response);
                setProducts(Object.values(response.products));
                setStatus(FETCH_STATUS.SUCCESS);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error.message)
            setStatus(FETCH_STATUS.ERROR);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (status === FETCH_STATUS.LOADING) {
        return <div></div>
    } else if (status === FETCH_STATUS.ERROR) {
        return <span>{error}</span>
    } else if (status === FETCH_STATUS.SUCCESS) {
        return (
            <div>
                <StoreHeader store={store} />
                <CardProductGroup products={products} />
            </div>
        );
    }
}

export default Store;