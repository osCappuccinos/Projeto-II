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
    }

    return { fetchTopRatedProducts };
}

export default useFirebaseRecommendations;