import { useState } from 'react';
import { searchProductsByName } from '../../service/firebase-search-function';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);

    const handleSearch = () => {
        console.log(`Searching for: ${searchTerm}`);
        searchProductsByName(searchTerm, (err, results) => {
            if (err) {
                console.error('Search error:', err);
                setError(`Search error: ${err}`);
                setSearchResults([]);  // Clear any previous results
            } else {
                console.log('Search results:', results);
                setSearchResults(results);
                setError(null);  // Clear any previous errors
            }
        });
    };
    
    

    return (
        <div>
            <input 
                type="text" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                placeholder="Search products..."
            />
            <button onClick={handleSearch}>Search</button>

            {error && <p>Error: {error}</p>}
            <ul>
                {searchResults.map(product => (
                    <li key={product.id}>{product.name}</li>  // Assuming each product object has an id and name
                ))}
            </ul>
        </div>
    );
}

export default SearchBar;
