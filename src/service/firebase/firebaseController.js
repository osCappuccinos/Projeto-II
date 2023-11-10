import { child, get, getDatabase, limitToLast, onValue, orderByChild, query, ref, remove, set, update } from "firebase/database";
import { useCallback } from "react";

import { db } from "./firebase-config";

// FAVORITES
// create a favorite product
export function createFavoriteProduct(clientId, productId, productData) {
  const favoriteRef = ref(db, `clients/${clientId}/favorites/${productId}`);
  set(favoriteRef, productData);
}

// READ all favorite products
export function readAllFavoriteProducts(clientId) {
  const favoriteRef = ref(db, `clients/${clientId}/favorites`);
  onValue(favoriteRef, (snapshot) => {
    const products = snapshot.val();
    // Handle the list of products
  });
}

// delete a favorite product
export function deleteFavoriteProduct(clientId, productId) {
  const productRef = ref(db, `clients/${clientId}/favorites/${productId}`);
  remove(productRef);
}

// DELIVERIES
// CREATE delivery address
export function createDeliveryAddress(orderId, deliveryData) {
  const deliveryRef = ref(db, `orders/${orderId}/delivery`);
  set(deliveryRef, deliveryData);
}

// READ delivery status of an order
export function readDeliveryStatus(orderId) {
  const deliveryRef = ref(db, `orders/${orderId}/delivery`);
  get(deliveryRef).then((snapshot) => {
    if (snapshot.exists()) {
      const deliveryStatus = snapshot.val();
      // Handle the delivery status
    } else {
      console.log("Delivery status not found");
    }
  });
}