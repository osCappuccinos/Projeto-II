import React, { useEffect, useState } from 'react';
import contentfulController from '../../../service/contentful/contentfulController';
import "./cardProduct.css"

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
        <div className="card">
            <div> 
                    <img src={firstProductImages}/>
                    <h2>{productName}</h2>
                    <p>R${productPrice}</p>
                    <button><a href={uri}>Comprar</a></button>
            </div>
        </div>
    );
}

export default CardProduct;