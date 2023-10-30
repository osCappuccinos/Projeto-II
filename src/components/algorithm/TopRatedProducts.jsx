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
                fetchTopRatedProducts(5, async (err, topRatedProducts) => {
                    if (err) throw new Error(err);

                    const allProducts = await getAllProductsContent();
                    
                    const combinedProducts = topRatedProducts.map(product => {
                        const matchedProduct = allProducts.find(p => p.id === product.id);
                        return {
                            id: product.id,
                            name: matchedProduct.name,
                            image: matchedProduct.images[0].file.url,
                            price: matchedProduct.price,
                            productName: product.productName // This is assuming you want to pass the productName from Firebase as well
                        };
                    });

                    setProducts(combinedProducts);
                   // console.log(combinedProducts)
                });
            } catch (err) {
                setError(err.message);
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
