import React, { useState, useEffect, useRef } from 'react';
import { searchProductsByName } from '../../service/firebase-search-function';
import './navbar.css'; // Certifique-se de que o caminho para o arquivo CSS está correto

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null); // Ref para o dropdown

  useEffect(() => {
    // Função para verificar se o clique foi fora do dropdown
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false); // Esconde o dropdown
      }
    }

    // Adiciona o ouvinte de evento quando o componente é montado
    document.addEventListener("mousedown", handleClickOutside);

    // Limpa o evento quando o componente é desmontado
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      setIsDropdownVisible(false);
      return;
    }
    searchProductsByName(searchTerm, (error, results) => {
      if (error) {
        console.error("Error fetching search results:", error);
        return;
      }
      setSearchResults(results);
      setIsDropdownVisible(true); // Mostra o dropdown com os resultados
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

      {isDropdownVisible && (
        <div className="search-results-dropdown" ref={dropdownRef}>
          {searchResults.length > 0 ? (
            searchResults.map((product, index) => (
              <div key={index} className="search-result-item">
                <a href={`/product/${product.id}`}>
                {product.name} - Vendido por: {product.storeName}
                </a>
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
