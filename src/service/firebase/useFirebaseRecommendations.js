import { get, limitToLast, orderByChild, query, ref } from "firebase/database";
import { db } from "./firebase-config";
import contentfulController from "../contentful/contentfulController";

const useFirebaseRecommendations = () => {
    const { getProductsContentByCategory } = contentfulController();

    const fetchTopRatedProducts = async (limit) => {
        const productsRef = ref(db, 'products');
        const topRatedQuery = query(productsRef, orderByChild('averageRating'), limitToLast(limit));
        const response = get(topRatedQuery).then(snapshot => {
            if (snapshot.exists()) {
                return snapshot.val();
            } else {
                console.log("No data available");
                return;
            }
        }).catch((error) => {
            console.error(error);
            return error;
        });

        return response;
    };

    const readClientOrders = async (clientId) => {
        const clientOrdersRef = ref(db, `orders/${clientId}`);
        const snapshot = await get(clientOrdersRef);
    
        if (snapshot.exists()) {
            return Object.values(snapshot.val());
        } else {
            console.log("No orders available for this client");
            return [];
        }
    };

    const getTopCategoriesFromOrders = async (clientOrders) => {
        let categoryCount = {};
        for (const order of clientOrders) {
            for (const product of order.products) {
                const category = product.category; // Certifique-se de que esta propriedade exista no seu modelo de dados
                categoryCount[category] = (categoryCount[category] || 0) + 1;
            }
        }
        const sortedCategories = Object.entries(categoryCount).sort((a, b) => b[1] - a[1]);
        return sortedCategories.map(entry => entry[0]);
    };

    const fetchPersonalizedRecommendations = async (clientId) => {
        const clientOrders = await readClientOrders(clientId);
        const topCategories = await getTopCategoriesFromOrders(clientOrders);
        let personalizedRecommendations = [];

        for (const category of topCategories) {
            if (personalizedRecommendations.length >= 5) break; // Limita a 5 recomendações

            const categoryProducts = await getProductsContentByCategory(category);
            personalizedRecommendations = personalizedRecommendations.concat(categoryProducts);
        }

        return personalizedRecommendations.slice(0, 5); // Retorna no máximo 5 recomendações
    };

    return { fetchTopRatedProducts, fetchPersonalizedRecommendations };
}

export default useFirebaseRecommendations;
