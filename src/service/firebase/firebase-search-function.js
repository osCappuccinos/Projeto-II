import { ref, onValue, get } from 'firebase/database';
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
                if (!product || !product.name) {
                    console.error('Invalid product or name missing:', product);
                    return false;
                }
                return product.name.toLowerCase().includes(searchTerm);
            });

            // Buscar informações da loja para cada produto
            Promise.all(filteredResults.map(product => {
                return new Promise((resolve, reject) => {
                    const storeRef = ref(db, `stores/${product.storeId}`);
                    get(storeRef).then((storeSnapshot) => {
                        if (storeSnapshot.exists()) {
                            const storeData = storeSnapshot.val();
                            resolve({ ...product, storeName: storeData.name });
                        } else {
                            resolve({ ...product, storeName: 'Store not found' });
                        }
                    }).catch(reject);
                });
            })).then(resultsWithStore => {
                callback(null, resultsWithStore);
            }).catch(error => {
                console.error('Error fetching store information:', error);
                callback(error);
            });

        } catch (error) {
            console.error('Error filtering products:', error);
            callback(error);
        }
    }, (error) => {
        console.error('Error reading from database:', error);
        callback(error);
    });
}
