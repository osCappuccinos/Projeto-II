import React, { useEffect, useState } from 'react';
import contentfulController from '../../../service/contentful/contentfulController';
import "./cardProduct.css"
import { H4, H2 } from '../../title/titles';

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

    const formattedProductPrice = "R$" + productPrice;
    return (
        
        <div className="card">
            <img src={firstProductImages}/>
            <H2 text={productName}/>
            <H4 text={formattedProductPrice}/>
            <button className='btn2'><a href={uri}>Comprar</a></button>
        </div>
    );
}

export default CardProduct;