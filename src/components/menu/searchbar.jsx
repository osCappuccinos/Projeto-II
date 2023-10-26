import { useState } from 'react';
import { searchProductsByName } from '../../service/firebase-search-function';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = () => {
      searchProductsByName(searchTerm, (error, results) => {
        if (error) {
          console.error("Error fetching search results:", error);
          return;
        }
        setSearchResults(results);
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
          <h2>Resultados da busca:</h2>
          <ul>
            {searchResults.map((product, index) => (
              <li key={index}>{product.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

export default SearchBar;
