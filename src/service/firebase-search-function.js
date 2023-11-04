import { ref, onValue } from 'firebase/database';
import { db } from './firebase-config';

export function searchProductsByName(searchTerm, callback) {
    searchTerm = searchTerm.trim().toLowerCase();

    if (searchTerm === '' || searchTerm.length === 1) {
        callback(null, []);
        return;
    }

    const productsRef = ref(db, 'products');
    onValue(productsRef, (snapshot) => {
        try {
            const allProducts = snapshot.val();
            if (!allProducts) {
                throw new Error('No products found in database.');
            }

            const filteredResults = Object.values(allProducts).filter(product => {
                if (!product || !product.name) { // Alterado de productName para name
                    console.error('Invalid product or name missing:', product);
                    return false;
                }
                return product.name.toLowerCase().includes(searchTerm); // Alterado de productName para name
            });

            callback(null, filteredResults);
        } catch (error) {
            console.error('Error filtering products:', error);
            callback(error);
        }
    }, (error) => {
        console.error('Error reading from database:', error);
        callback(error);
    });
}

