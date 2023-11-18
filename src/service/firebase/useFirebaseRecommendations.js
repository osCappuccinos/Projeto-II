import { get, limitToLast, orderByChild, query, ref } from "firebase/database";
import { db } from "./firebase-config";

const useFirebaseRecommendations = () => {
    const fetchTopRatedProducts = async (limit) => {
        const productsRef = ref(db, 'products');
        const topRatedQuery = query(productsRef, orderByChild('averageRating'), limitToLast(limit));
        const response = get(topRatedQuery).then(snapshot => {
            if (snapshot.exists()) {
                return snapshot.val();
            } else {
                console.log("No data available");
                return
            }
        }).catch((error) => {
            console.error(error);
            return error;
        });

        return response;
    };

    // Função para ler os pedidos de um cliente específico
    const readClientOrders = async (clientId) => {
        const ordersRef = ref(db, 'orders');
        const allOrders = await get(ordersRef);
        const ordersData = allOrders.val();

        const clientOrders = Object.values(ordersData).filter(order => order.clientId === clientId);
        return clientOrders;
    };

    // Função para identificar as categorias mais compradas pelo cliente
    const getTopCategoriesFromOrders = async (clientOrders) => {
        let categoryCount = {};

        for (const order of clientOrders) {
            for (const product of order.products) {
                const category = product.category; // Garanta que esta propriedade exista no seu modelo de dados
                categoryCount[category] = (categoryCount[category] || 0) + 1;
            }
        }

        const sortedCategories = Object.entries(categoryCount).sort((a, b) => b[1] - a[1]);
        return sortedCategories.map(entry => entry[0]);
    };

    // Função para buscar recomendações personalizadas
const fetchPersonalizedRecommendations = async (clientId) => {
    const clientOrders = await readClientOrders(clientId);
    const topCategories = await getTopCategoriesFromOrders(clientOrders);
    let personalizedRecommendations = [];
    const limitPerCategory = 5; // Você pode ajustar este número conforme necessário

    for (const category of topCategories) {
        if (personalizedRecommendations.length >= 5) break; // Interrompe se já tiver 5 recomendações

        const productsRef = ref(db, 'products');
        const topRatedQuery = query(productsRef, orderByChild('averageRating'), limitToLast(limitPerCategory));
        const response = await get(topRatedQuery);

        if (response.exists()) {
            const allProducts = response.val();
            const filteredProducts = Object.values(allProducts).filter(product => product.category === category);
            personalizedRecommendations = personalizedRecommendations.concat(filteredProducts);
        }
    }

    return personalizedRecommendations.slice(0, 5); // Garante que somente 5 recomendações sejam retornadas
};


    return { fetchTopRatedProducts, fetchPersonalizedRecommendations };
}

export default useFirebaseRecommendations;
