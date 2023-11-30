import React, { useEffect, useState } from 'react';
import Carousel from '../components/carousel/carousel';
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
    const carouselData = [
        { url: 'https://images.ctfassets.net/kw4ib93qcl5n/5WgN2uO2Y1kaUGMJGHkQ90/59eff2a6ed7d96c029a76b0ab4576401/container_banner_destaques_2.png', caption: 'Vender seus produtos agora ficou mais fácil com a Ruma' },
        { url: 'https://images.ctfassets.net/kw4ib93qcl5n/7pPAIHEUgYDuuPHfGP7BcM/6184c216fb53c152aa0b1d91e6e678b4/container_banner_destaques_1.png', caption: 'As melhores escolhas para usar em qualquer momento do dia' },
        // Adicione mais objetos conforme necessário
      ];
      

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
                />
                 <div>
                 <Carousel images={carouselData} />
                </div>
                <div className="all-container">
                    <H1 text="Moda em destaque" />
                    <TopRatedProducts />
                </div>
            </div>
        );
    }
}

export default Products;
