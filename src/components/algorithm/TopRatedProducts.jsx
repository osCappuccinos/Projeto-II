import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FETCH_STATUS } from '../../service/fetchStatus';
import useFirebaseRecommendations from '../../service/firebase/useFirebaseRecommendations';
import { CardProductGroup } from '../cards/cardProduct/cardProductGroup';

import './TopRatedProducts.css';

function TopRatedProducts() {
    const { fetchTopRatedProducts, fetchPersonalizedRecommendations } = useFirebaseRecommendations();

    const [products, setProducts] = useState([]);
    const [status, SetStatus] = useState(FETCH_STATUS.IDLE);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
            SetStatus(FETCH_STATUS.LOADING);

            const auth = getAuth();
            onAuthStateChanged(auth, async (user) => {
                let response;
                if (user) {
                    response = await fetchPersonalizedRecommendations(user.uid, 8);
                    if (!response || response.length === 0) {
                        response = await fetchTopRatedProducts(8);
                    }
                } else {
                    response = await fetchTopRatedProducts(8);
                }

                if (response) {
                    setProducts(response);
                    SetStatus(FETCH_STATUS.SUCCESS);
                }
            });

            // Definir um tempo limite para mudar para fetchTopRatedProducts se ainda estiver carregando
            setTimeout(async () => {
                if (status === FETCH_STATUS.LOADING) {
                    const response = await fetchTopRatedProducts(8);
                    if (response) {
                        setProducts(response);
                        SetStatus(FETCH_STATUS.SUCCESS);
                    }
                }
            }, 5000); // 5 segundos de tempo limite
        } catch (error) {
            console.error("Error fetching products:", error);
            setError(error.message);
            SetStatus(FETCH_STATUS.ERROR);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (status === FETCH_STATUS.LOADING) {
        return <div>Loading...</div>;
    } else if (status === FETCH_STATUS.ERROR) {
        return <span>{error}</span>;
    } else if (status === FETCH_STATUS.SUCCESS) {
        return (
            <div>
                <CardProductGroup products={products} />
            </div>
        );
    }
}

export default TopRatedProducts;
