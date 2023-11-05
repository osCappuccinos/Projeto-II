import React, { useState, useEffect } from 'react';
import { fetchTopRatedProducts } from '../../service/firebaseController'; // Ajuste o caminho conforme necessário
import contentfulConfig from '../../service/contentful/contentful-config'; // Ajuste o caminho conforme necessário
import Card from '../card/card';

const { getAllProductsContent } = contentfulConfig();

function TopRatedProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Converta o padrão de callback para uma promessa
                const topRatedProducts = await new Promise((resolve, reject) => {
                    fetchTopRatedProducts(5, (err, data) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(data);
                        }
                    });
                });

                const allProducts = await getAllProductsContent();
                const topRatedProductsArray = Object.values(topRatedProducts || {});
                
                // Combine os produtos do Firebase com os do Contentful
                const combinedProducts = topRatedProductsArray.map(product => {
                    const matchedProduct = allProducts.find(p => p.id === product.id);
                    if (!matchedProduct) {
                        console.error(`Produto com ID ${product.id} não encontrado.`);
                        return null;
                    }
                    return {
                        id: product.id,
                        name: matchedProduct.name,
                        image: matchedProduct.images && matchedProduct.images[0]?.file.url, // Use encadeamento opcional
                        price: matchedProduct.price,
                        averageRating: product.averageRating // Adicione a avaliação média
                    };
                }).filter(Boolean); // Remova quaisquer valores nulos do array

                setProducts(combinedProducts);
                console.log(combinedProducts)
            } catch (err) {
                setError(err.message);
                console.error(err.message);
            }
        };

        
        fetchProducts();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Produtos Mais Bem Avaliados</h2>
            <div className="productRow">
                {products.map(product => (
                    <Card 
                        key={product.id} 
                        id={product.id} 
                        title={product.name} 
                        image={product.image}
                        price={product.price}
                        rating={product.averageRating} // Exiba a avaliação média
                    />
                ))}
            </div>
        </div>
    );
}

export default TopRatedProducts;
