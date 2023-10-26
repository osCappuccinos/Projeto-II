import { ref, onValue } from 'firebase/database';

export function searchProductsByName(searchTerm, callback) {
    const productsRef = ref(db, 'products');
    onValue(productsRef, (snapshot) => {
        const allProducts = snapshot.val();
        const filteredResults = Object.values(allProducts).filter(product => 
            product.name.includes(searchTerm)
        );
        callback(null, filteredResults);
    }, (error) => {
        callback(error);
    });
}

