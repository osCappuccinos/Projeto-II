import React, { useEffect, useState } from 'react';

import contentfulController from '../../service/contentful/contentfulController'
import { FETCH_STATUS } from '../../service/fetchStatus';
import useFirebaseReviews from '../../service/firebase/useFirebaseReviews';
import { H2, H4 } from '../title/titles'

const StoreHeader = ({ store }) => {
    const { readStoreReviews } = useFirebaseReviews();
    const { getStoreContent } = contentfulController();

    const [content, setContent] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [status, SetStatus] = useState(FETCH_STATUS.IDLE);
    const [error, setError] = useState(null);

    const bannerImage = "https://images.ctfassets.net/kw4ib93qcl5n/1lwkkFZBQQc6h4gDIqgmZI/10c66258106c768ea83b212ec086acb5/banner01.png"
    const categories = store.categories || ['Moda praia', 'Vestidos', 'Moda feminina'];

    const fetchData = async () => {
        try {
            SetStatus(FETCH_STATUS.LOADING);

            const contentResponse = await getStoreContent(store.id);
            const reviewsResponse = await readStoreReviews(store.id);

            if (reviewsResponse && contentResponse) {
                setReviews(reviewsResponse);
                setContent(contentResponse);
                SetStatus(FETCH_STATUS.SUCCESS);
            }

        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error.message)
            SetStatus(FETCH_STATUS.ERROR);
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
                <div className="store-header">
                    <div className="store-banner"></div>
                    <div className="store-avatar"> {/* Placeholder para o Avatar */}
                    </div>
                    <div className="store-name">
                        <h1>{store.name}</h1>
                    </div>
                    <div className="store-categories">
                        {categories.map((category) => (
                            <Chip label={category} className="category-chip" />
                        ))}
                    </div>

                    <div className="rating-container">
                        <StarRateIcon fontSize="inherit" />
                        <H4 text={`Avaliação média: ${reviews.totalAverageRating}`} />
                    </div>
                    <SocialMediaIcons />
                </div>
            </div>
        );
    }
};

export default StoreHeader;