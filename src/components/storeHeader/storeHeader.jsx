import React, { useEffect, useState } from 'react';
import contentfulController from '../../service/contentful/contentfulController'
import { FETCH_STATUS } from '../../service/fetchStatus';
import useFirebaseReviews from '../../service/firebase/useFirebaseReviews';
import { H2, H4 } from '../title/titles'
import SocialMediaIcons from '../icons/socialmediaicons';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';


const StoreHeader = ({ store }) => {
    const { readStoreReviews } = useFirebaseReviews();
    const { getStoreContent } = contentfulController();

    const [content, setContent] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [categories, setCategories] = useState([]);
    const [status, SetStatus] = useState(FETCH_STATUS.IDLE);
    const [error, setError] = useState(null);

    const bannerImage = "https://images.ctfassets.net/kw4ib93qcl5n/1lwkkFZBQQc6h4gDIqgmZI/10c66258106c768ea83b212ec086acb5/banner01.png"

    const fetchData = async () => {
        try {
            SetStatus(FETCH_STATUS.LOADING);
    
            const contentResponse = await getStoreContent(store.id);
            const reviewsResponse = await readStoreReviews(store.id);
    
            if (reviewsResponse && contentResponse) {
                setReviews(reviewsResponse);
                setContent(contentResponse);
    
                if (contentResponse.length > 0 && contentResponse[0].category) {
                    setCategories(contentResponse[0].category);
                }
    
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

    if (status === FETCH_STATUS.LOADING) {
        return <div>Loading...</div>;
    } else if (status === FETCH_STATUS.ERROR) {
        return <span>{error}</span>;
    } else if (status === FETCH_STATUS.SUCCESS) {
        return (
            <header className="store-header" style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius:'10px' }}>
                <div className="white-background-extension" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)', padding: '20px', borderRadius: '10px', maxWidth: '100%', textAlign: 'center', margin: '0 auto' }}>
                    <Avatar alt={store.name} src={store.avatar} className="store-avatar" style={{ width: '100px', height: '100px', margin: '0 auto' }} />
                    <H2 text={store.name} className="store-name" />
                    <div className="store-categories" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', margin: '10px 0' }}>
                        {categories.map((category, index) => (
                            <Chip key={index} label={category} className="category-chip" />
                        ))}
                    </div>
                    <div className="rating-container">
                        <H4 text={`⭐Avaliação média: ${reviews.totalAverageRating}`} className="store-rating" />
                    </div>
                    <SocialMediaIcons className="social-media-icons" />
                </div>
            </header>
        );
    }
};


export default StoreHeader;