import React, { useEffect, useState } from 'react';
import contentfulController from '../../service/contentful/contentfulController';
import "./cardStore.css"

function CardStore(props) {
    const [content, setContent] = useState([])
    const { getStoreProductsContent } = contentfulController();

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await getStoreProductsContent(props.store.id);
            setContent(response);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, [getStoreProductsContent]);

    return (
        <div className="cardStore">
            <div className="imagesGrid">
                {
                    content
                        //.filter((contents) => props.store.products.some((products) => contents.id === products.id))
                        .slice(0, 3)
                        .map((contents) => (
                                    <img className="img" src={contents.images[0].file.url} key={contents.id} alt={`Product ${contents.id}`} />
                        ))
                }            
            </div>
            <h2>{props.store.name}</h2>
            <h3>Moda praia</h3>
        </div>
    );
}

export default CardStore;