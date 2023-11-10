import { child, get, getDatabase, ref } from "firebase/database";

const useFirebaseProducts = () => {
    const readAllProducts = async () => {
        const dbRef = ref(getDatabase());
        const response = get(child(dbRef, `products`)).then((snapshot) => {
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
    }

    const readProduct = async (productId) => {
        const dbRef = ref(getDatabase());
        const response = get(child(dbRef, `products/${productId}`)).then((snapshot) => {
            if (snapshot.exists()) {
                return snapshot.val();
            } else {
                callback("No data available");
            }
        }).catch((error) => {
            console.log(error);
            return error;
        });

        return response;
    }

    return { readAllProducts, readProduct };
}

export default useFirebaseProducts;