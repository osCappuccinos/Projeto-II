import { useState } from 'react';
import { searchProductsByName } from '../../service/firebase-search-function';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // A flag to know if the user has performed a search

  const handleSearch = () => {
    searchProductsByName(searchTerm, (error, results) => {
      if (error) {
        console.error("Error fetching search results:", error);
        return;
      }
      setSearchResults(results);
      setHasSearched(true); // set this flag to true once a search is performed
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Busque um produto..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
      <h2>Search Results:</h2>
      {hasSearched && searchResults.length === 0 ? (
        <p>No products found for the given search term.</p>
      ) : (
        <ul>
          {searchResults.map((product, index) => (
            <li key={index}>
              {product.name} - Vendido por: {product.storeName}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
  );
}

export default SearchBar;
