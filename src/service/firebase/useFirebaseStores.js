import { child, get, getDatabase, ref } from "firebase/database";

const useFirebaseStores = () => {
    const readAllStores = async () => {
        const dbRef = ref(getDatabase());
        const response = get(child(dbRef, `stores`)).then((snapshot) => {
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

    const readStore = async (storeId) => {
        const dbRef = ref(getDatabase());
        const response = get(child(dbRef, `stores/${storeId}`)).then((snapshot) => {
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

    const readAllStoreProducts = async (storeId) => {
        const dbRef = ref(getDatabase());
        const response = get(child(dbRef, `stores/${storeId}/products`)).then((snapshot) => {
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

    function readStoreProduct(storeId, productId) {
        const dbRef = ref(getDatabase());
        const response = get(child(dbRef, `stores/${storeId}/products/${productId}`)).then((snapshot) => {
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

    return { readAllStores, readStore, readAllStoreProducts, readStoreProduct };
}

export default useFirebaseStores;