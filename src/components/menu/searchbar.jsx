import { debounce } from 'lodash';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import useFirebaseSearch from '../../service/firebase/useFirebaseSearch';

// Assuming lodash is installed
import './searchbar.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const { searchProductsByName } = useFirebaseSearch();

  const debouncedSearch = useCallback(
    debounce(async (query) => {
      if (query.trim() === '') {
        setSearchResults([]);
        setIsDropdownVisible(false);
        return;
      }

      try {
        const results = await searchProductsByName(query);
        setSearchResults(results);
        setIsDropdownVisible(results.length > 0);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }, 300),
    []
  ); // Debounce search input

  useEffect(() => {
    if (searchTerm) {
      debouncedSearch(searchTerm);
    } else {
      setSearchResults([]);
      setIsDropdownVisible(false);
    }
  }, [searchTerm, debouncedSearch]); // Trigger search on searchTerm change

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchClick = () => {
    debouncedSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Busque um produto..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search Products"
      />
      <button onClick={handleSearchClick}><SearchOutlinedIcon /></button>

      {isDropdownVisible && (
        <div className="search-results-dropdown" ref={dropdownRef}>
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <div key={product.id} className="search-result-item">
                <a href={`/produtos/${product.id}`}>
                  {product.name} - Vendido por: {product.storeName}
                </a>
              </div>
            ))
          ) : (
            <div className="search-no-results">Nenhum produto encontrado.</div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
