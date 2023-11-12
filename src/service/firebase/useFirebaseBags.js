import { child, get, getDatabase, ref, remove, set, update } from "firebase/database";

import { db } from "./firebase-config";

const useFirebaseBags = () => {
    const createProductInBag = async (clientId, productId, quantity) => {
        const bagRef = ref(db, `clients/${clientId}/bag/${productId}`);

        const data = {
            productId: productId,
            quantity: quantity,
        };

        const response = set(bagRef, data).then(() => {
            return data;
        }).catch((error) => {
            console.log(error);
            return error;
        });

        return response;
    }

    const readBag = async (clientId) => {
        const dbRef = ref(getDatabase());
        const response = get(child(dbRef, `clients/${clientId}/bag`)).then((snapshot) => {
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

    const updateProductQuantityInBag = async (clientId, productId, quantity) => {
        const productRef = ref(db, `clients/${clientId}/bag/${productId}`);

        const data = {
            productId: productId,
            quantity: quantity,
        }

        const response = update(productRef, data).then(() => {
            return data;
        }).catch((error) => {
            console.log(error);
            return error;
        });

        return response;
    }

    const deleteProductFromBag = async (clientId, productId) => {
        const productRef = ref(db, `clients/${clientId}/bag/${productId}`);
        remove(productRef);
    }

    return { createProductInBag, readBag, updateProductQuantityInBag, deleteProductFromBag };

}

export default useFirebaseBags;