import React, { useEffect, useState } from 'react';
import CardProduct from '../components/cardProduct/cardProduct';
import CardStore from '../components/cardStore/cardStore';
import { readProduct, createProduct, readAllStoreProducts, readStore, readAllProducts } from '../service/firebase/firebaseController';
import contentfulConfig from '../service/contentful/contentfulConfiguration';
import TopRatedProducts from '../components/algorithm/TopRatedProducts'
import "./Products.css";

function Products() {
    const [store1, setStore1] = useState([]);
    const [store2, setStore2] = useState([]);
    const [store3, setStore3] = useState([]);
    const [store4, setStore4] = useState([]);
    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            readAllProducts((products) => {
                setProducts(products)
            })
          try {
            const response1 = await readStore("areia-moda").then((response => setStore1(response)));
            const response2 = await readStore("charm-chic").then((response => setStore2(response)));
            const response3 = await readStore("estilo-fino").then((response => setStore3(response)));
            const response4 = await readStore("loja-iracema").then((response => setStore4(response)));

            setData(response1);
            setData(response2);
            setData(response3);
            setData(response4);

          } catch (error) {
            setError(error);
          } finally {
            setIsLoading(false);
          }
        };
      
        fetchData();
      }, [readStore, readAllProducts]);

      const productArray = Object.values(products)

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
                            <div className="card-grid">
                            <CardStore 
                                store = { store1 }
                            />
                            <CardStore 
                                store = { store2 }
                            />
                            <CardStore 
                                store = { store3 }
                            />
                            <CardStore 
                                store = { store4 }
                            />
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="all-container">
                <h1 className="title">Produtos</h1>
                <div className="card-grid">
                    <TopRatedProducts />
                </div>
            </div>
            

        </div>
    );
}

export default Products;