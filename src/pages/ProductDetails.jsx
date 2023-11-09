import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from "../components/comment/comment";
import CardProductDetails from "../components/cards/cardProductDetails/cardProductDetails";
import contentfulController from '../service/contentful/contentfulController';
import "./ProductDetails.css";

const ProductDetails = (props) => {
    const { id } = useParams();
    const { getProductContent } = contentfulController();

    const [content, setContent] = useState([]);

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await getProductContent(id);
            setContent(response);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, [getProductContent]);

    return (
        <div className="info-container">
            <CardProductDetails
                content = { content.length > 0 ? content : [] }
            />
            
        </div>
    );
}

export default ProductDetails;