import React, { useEffect, useState } from 'react';
import contentfulController from '../../service/contentful/contentfulController';
import { FETCH_STATUS } from '../../service/fetchStatus';
import useFirebaseReviews from '../../service/firebase/useFirebaseReviews';
import { H2, H4 } from '../title/titles';
import SocialMediaIcons from '../icons/socialmediaicons';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import "./storeheader.css";

const StoreHeader = ({ store }) => {
    const { readStoreReviews } = useFirebaseReviews();
    const { getStoreContent } = contentfulController();

    const [content, setContent] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [categories, setCategories] = useState([]);
    const [storeLogo, setStoreLogo] = useState(null);
    const [status, setStatus] = useState(FETCH_STATUS.IDLE);
    const [error, setError] = useState(null);

    const bannerImage = "https://images.ctfassets.net/kw4ib93qcl5n/1lwkkFZBQQc6h4gDIqgmZI/10c66258106c768ea83b212ec086acb5/banner01.png";

    const fetchData = async () => {
        try {
            setStatus(FETCH_STATUS.LOADING);

            const contentResponse = await getStoreContent(store.id);
            const reviewsResponse = await readStoreReviews(store.id);

            if (reviewsResponse && contentResponse) {
                setReviews(reviewsResponse);
                setContent(contentResponse);

                if (contentResponse.length > 0 && contentResponse[0].category) {
                    setCategories(contentResponse[0].category);
                }

                if (contentResponse.length > 0 && contentResponse[0].logo) {
                    const logoUrl = contentResponse[0].logo.fields.file.url;
                    setStoreLogo(logoUrl);
                }

                setStatus(FETCH_STATUS.SUCCESS);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error.message);
            setStatus(FETCH_STATUS.ERROR);
        }
    };

    useEffect(() => {
        fetchData();
    }, [store.id]);

    if (status === FETCH_STATUS.LOADING) {
        return <div>Loading...</div>;
    } else if (status === FETCH_STATUS.ERROR) {
        return <span>Error: {error}</span>;
    } else if (status === FETCH_STATUS.SUCCESS) {
        return (
            <header className="store-header" style={{ backgroundImage: `url(${bannerImage})` }}>
                <div className="white-background-extension">
                    <Avatar alt={store.name} src={storeLogo} className="store-avatar" />
                    <H2 text={store.name} className="store-name" />
                    <div className="rating-container">
                        <H4 text={`⭐ Average Rating: ${reviews.totalAverageRating}`} className="store-rating" />
                    </div>
                    <div className="store-categories">
                        {categories.map((category, index) => (
                            <Chip key={index} label={category} className="category-chip" />
                        ))}
                    </div>
                    <SocialMediaIcons className="social-media-icons" />
                </div>
            </header>
        );
    }
    return null;
};

export default StoreHeader;
