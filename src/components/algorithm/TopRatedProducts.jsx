import React, { useState, useEffect } from 'react';
import { fetchTopRatedProducts } from '../../service/firebaseController'; // adjust path
import contentfulConfig from '../../service/contentful/contentful-config'; // adjust path
import Card from '../card/card';

const { getAllProductsContent } = contentfulConfig();

function TopRatedProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTopRatedProducts(5, (err, topRatedProducts) => {
      if (err) {
        setError(err);
      } else {
        setProducts(topRatedProducts);
      }
    });
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
