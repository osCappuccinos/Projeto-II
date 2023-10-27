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
        const allProducts = snapshot.val();
        const filteredResults = Object.values(allProducts).filter(product =>
            product.productName.toLowerCase().includes(searchTerm)
        );
        callback(null, filteredResults);
    }, (error) => {
        callback(error);
    });
}
