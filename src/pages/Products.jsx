import React, { useEffect, useState } from 'react';
import CardProduct from '../components/cardProduct/cardProduct';
import CardStore from '../components/cardStore/cardStore';
import { readProduct, createProduct, readAllStoreProducts, readStore } from '../service/firebase/firebaseController';
import contentfulConfig from '../service/contentful/contentfulConfiguration';
import "./Products.css";

function Products() {
    const [store, setStore] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await readStore("areia-moda").then((response => setStore(response)));
            setData(response);
          } catch (error) {
            setError(error);
          } finally {
            setIsLoading(false);
          }
        };
      
        fetchData();
      }, [readStore]);

    return (
        <div className="bodyContainer">
            <div className="destaque"></div>
            <div className="all-container">
                <h1 className="title">Novas tendências na Ruma</h1>
                <div className="card-grid">
                    {
                        isLoading? (
                            <p></p>
                        ) : (
                            <CardStore 
                                store = { store }
                            />
                        )
                    }
                </div>
            </div>
            <div className="all-container">
                <h1 className="title">Produtos</h1>
                <div className="card-grid">
                { content.map((product, index) => (
                <CardProduct 
                    id={products.id}
                    key={index}
                    title={product.name}
                    price={product.price}
                    image={product.images[0].file.url}
                />
            )) }
                </div>
            </div>
            

        </div>
    );
}

export default Products;