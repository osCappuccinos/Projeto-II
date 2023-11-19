import { child, get, getDatabase, ref, set } from "firebase/database";
import { db } from "./firebase-config";

const useFirebaseOrders = () => {

    const createOrder = async (clientId, products) => {
        const timestamp = Date.now();
        const randomNumber = Math.floor(Math.random() * 10000);
        const orderId = `${timestamp}-${randomNumber}`;
        const orderRef = ref(db, `orders/${orderId}`);

        const data = {
            id: orderId,
            products: products,
            clientId: clientId,
        }

        const response = set(orderRef, data)
            .then(() => {
                return data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });

        return response;
    };

    const readAllOrders = async () => {
        console.log("Tentando ler pedidos...");
        const dbRef = ref(getDatabase());
        const response = get(child(dbRef, `orders`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log("Pedidos encontrados:", snapshot.val());
                return snapshot.val();
            } else {
                console.log("Nenhum pedido disponível");
                return;
            }
        }).catch((error) => {
            console.error("Erro ao ler pedidos:", error);
        });
    
        return response;
    };
    

    const readOrder = async (orderId) => {
        const dbRef = ref(getDatabase());
        const response = get(child(dbRef, `orders/${orderId}`)).then((snapshot) => {
            if (snapshot.exists()) {
                return snapshot.val();
            } else {
                console.log("No data available");
                return;
            }
        }).catch((error) => {
            console.error(error);
            return error
        });

        return response;
    }

    return { createOrder, readAllOrders, readOrder };
}

export default useFirebaseOrders;