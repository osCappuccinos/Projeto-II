import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Importe o seu componente modal
import WelcomeModal from '../components/modal/welcomeModal';

import TopRatedProducts from '../components/algorithm/TopRatedProducts';
import { Banner } from '../components/banner/banner';
import { CardStoreGroup } from '../components/cards/cardStore/cardStoreGroup';
import { H1 } from '../components/title/titles';
import { FETCH_STATUS } from '../service/fetchStatus';
import useFirebaseStores from '../service/firebase/useFirebaseStores';

import './Products.css';

function Products() {
    const { readAllStores } = useFirebaseStores();

    const [stores, setStores] = useState(null);
    const [status, setStatus] = useState(FETCH_STATUS.IDLE);
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

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
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setIsAuthenticated(true);
                setUser(currentUser); // Ou apenas uma string com o nome, por exemplo
            } else {
                setIsAuthenticated(false);
                setUser(null);
            }
        });

        fetchData();

        return () => unsubscribe(); // Limpeza
    }, []);

    if (status === FETCH_STATUS.LOADING) {
        return <div></div>
    } else if (status === FETCH_STATUS.ERROR) {
        return <span>{error}</span>
    } else if (status === FETCH_STATUS.SUCCESS) {
        return (
            <div className="bodyContainer">
                <WelcomeModal 
                isOpen={!isAuthenticated} 
                onClose={() => setIsAuthenticated(true)} 
                userName={user ? user.displayName : ''} 
                imageUrl={'https://images.ctfassets.net/kw4ib93qcl5n/1lwkkFZBQQc6h4gDIqgmZI/10c66258106c768ea83b212ec086acb5/banner01.png'}
            />
                <Banner />
                <H1 text="Novas tendências na Ruma" />
                <CardStoreGroup stores={stores} />
                <div className="all-container">
                    <H1 text="Produtos" />
                    <TopRatedProducts />
                </div>
            </div>
        );
    }
}

export default Products;
