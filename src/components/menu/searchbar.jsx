import React, { useState } from 'react';
import { searchProductsByName } from '../../service/firebase-search-function';
import './navbar.css'; // Certifique-se de que o caminho para o arquivo CSS está correto

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      setHasSearched(false);
      return;
    }
    searchProductsByName(searchTerm, (error, results) => {
      if (error) {
        console.error("Error fetching search results:", error);
        return;
      }
      setSearchResults(results);
      setHasSearched(true);
    });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Busque um produto..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Buscar</button>

      {hasSearched && (
        <div className="search-results-dropdown">
          {searchResults.length > 0 ? (
            searchResults.map((product, index) => (
              <div key={index} className="search-result-item">
                {product.name} - Vendido por: {product.storeName}
              </div>
            ))
          ) : (
            <div className="search-no-results">
              Nenhum produto encontrado.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
