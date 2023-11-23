import React, { useEffect, useState } from 'react';
import contentfulController from '../../../service/contentful/contentfulController';
import "./cardProduct.css";
import StarIcon from '@mui/icons-material/Star';
import ShoppingBagIcon from "../../icons/iconshoppingbag.svg";

function CardProduct(props) {
    const [content, setContent] = useState([])
    const { getProductContent } = contentfulController();

    useEffect(() => {
        getProductContent(props.product.id).then((response) => setContent(response));
    }, [getProductContent]);

    const uri = '/produtos/'+ props.product.id
    
    const firstProductImages = content.length > 0 ? content[0].images[0].file.url : [];    
    const productName = content.length > 0 ? content[0].name : [];    
    const productPrice = content.length > 0 ? content[0].price : [];    

    return (
        <div className="card-product">
            <img src={firstProductImages}/>
            <h2>{productName}</h2>
            <div className="bottom-info">
                <div className="price-and-rating">
                    <p>R${productPrice}</p>
                    <StarIcon className="star"/>
                    <p className='ratingtext'>4.5</p>
                </div>
                <a href={uri}><img className="shoppingBagIcon" src={ShoppingBagIcon} alt="" /></a>
            </div>
        </div>
    );
}

export default CardProduct;