import React, { useEffect, useState } from 'react';
import contentfulController from '../../service/contentful/contentfulController';
import { FETCH_STATUS } from '../../service/fetchStatus';
import useFirebaseReviews from '../../service/firebase/useFirebaseReviews';
import { H2, H4 } from '../title/titles';
import SocialMediaIcons from '../icons/socialmediaicons';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./storeheader.css";

const StoreHeader = ({ store }) => {
    const { readStoreReviews } = useFirebaseReviews();
    const { getStoreContent } = contentfulController();

    const [name, setName] = useState([])
    const [content, setContent] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [categories, setCategories] = useState([]);
    const [storeLogo, setStoreLogo] = useState(null);
    const [status, setStatus] = useState(FETCH_STATUS.IDLE);
    const [error, setError] = useState(null);

    const bannerImage = "https://images.ctfassets.net/kw4ib93qcl5n/1lwkkFZBQQc6h4gDIqgmZI/10c66258106c768ea83b212ec086acb5/banner01.png";
    const profileImage = "https://s2-g1.glbimg.com/enqW-At-ko9YkM1sRM5oFAsjPp4=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/r/B/Rh7NobSomsDNjpDfsUyg/iracema-guardia-reinstalada.jpg"

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

                if (contentResponse.length > 0 && contentResponse[0].category) {
                    setName(contentResponse[0].name);
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
                    {/* <Avatar alt={store.name} src={storeLogo} className="store-avatar" />
                    <H2 text={store.name} className="store-name" /> */}
                    <div className="store-rectangle" style={{ backgroundImage: `url(${bannerImage})` }}>
                        <div className="store-circle" style={{ backgroundImage: `url(${storeLogo})` }}></div>
                        <div class="icon-container">
                            <SocialMediaIcons className="social-media-icons" />
                        </div>
                    </div>
                    <div className="store-name">
                        <H2 text={name}></H2>
                    </div>
                    <div className="rating-container">
                        <H4 text={`⭐ Avaliação geral: ${reviews.totalAverageRating}`} className="store-rating" />
                    </div>
                    <div className="store-categories">
                        {categories.map((category, index) => (
                            <Chip key={index} label={category} className="category-chip" />
                        ))}
                    </div>
                </div>
            </header>
        );
    }
    return null;
};

export default StoreHeader;
