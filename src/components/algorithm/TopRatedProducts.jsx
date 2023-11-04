import React, { useState, useEffect } from 'react';
import { fetchTopRatedProducts } from '../../service/firebaseController'; // adjust path
import contentfulConfig from '../../service/contentful/contentful-config'; // adjust path
import Card from '../card/card';

const { getAllProductsContent } = contentfulConfig();

function TopRatedProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Convert callback pattern to a promise
                const topRatedProducts = await new Promise((resolve, reject) => {
                    fetchTopRatedProducts(5, (err, data) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(data);
                        }
                    });
                });
            console.log('linha 25')

                const allProducts = await getAllProductsContent();
                console.log('linha 28')
                const topRatedProductsArray = Object.values(topRatedProducts || {});
                
                const combinedProducts = topRatedProductsArray.map(product => {
                    const matchedProduct = allProducts.find(p => p.id === product.id);
                    if (!matchedProduct) {
                        console.error(`Product with ID ${product.id} not found.`);
                        return null;
                    }
                    return {
                        id: product.id,
                        name: matchedProduct.name,
                        image: matchedProduct.images[0]?.file.url, // Use optional chaining in case images array is empty
                        price: matchedProduct.price,
                        productName: product.productName 
                    };
                }).filter(Boolean); // Remove any null values from the array
        

                setProducts(combinedProducts);
                console.log('Top Rated Products:', topRatedProductsArray);
console.log('All Products:', allProducts);
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
      <h2>Top Rated Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.productName} - Rating: {product.averageRating}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopRatedProducts;
