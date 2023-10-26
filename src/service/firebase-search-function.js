import { ref, onValue, query, orderByChild, startAt, endAt } from 'firebase/database';

export function searchProductsByName(searchTerm, callback) {
    const productsRef = ref(db, 'products');
    const searchQuery = query(
        productsRef,
        orderByChild('name'),       // Assuming 'name' is the field you want to search
        startAt(searchTerm),
        endAt(searchTerm + "\uf8ff")
    );

    onValue(searchQuery, (snapshot) => {
        const results = [];
        snapshot.forEach(childSnapshot => {
            results.push(childSnapshot.val());
        });
        callback(null, results);
    }, (error) => {
        callback(error);
    });
}
