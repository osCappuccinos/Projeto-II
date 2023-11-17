import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Banner } from '../components/banner/banner';
import { CardProductGroup } from '../components/cards/cardProduct/cardProductGroup';
import { H1 } from '../components/title/titles';
import contentfulController from '../service/contentful/contentfulController';
import { FETCH_STATUS } from '../service/fetchStatus';
import './Products.css';

function ProductsByCategory() {
    const { id } = useParams();
    const { getProductsContentByCategory } = contentfulController();

    const [content, setContent] = useState([]);
    const [status, SetStatus] = useState(FETCH_STATUS.IDLE);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            SetStatus(FETCH_STATUS.LOADING);

            const response = await getProductsContentByCategory(id);

            if (response) {
                setContent(response);
                SetStatus(FETCH_STATUS.SUCCESS);
            }

        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error.message)
            SetStatus(FETCH_STATUS.ERROR);
        }
    }

    console.log(content)

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
                <div className="all-container">
                    <H1 text="Produtos" />
                    <CardProductGroup products={content} />
                </div>
            </div>
        );
    }
}

export default ProductsByCategory;