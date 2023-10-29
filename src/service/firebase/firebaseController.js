import { useCallback } from "react";
import { db } from "./firebase-config";
import { ref, set, onValue, get, update, remove, orderByChild } from "firebase/database";
// import { getAuth } from "firebase/auth";

export function createUser(userId, name, email, password, callback) {
    const reference = ref(db, 'user/' + userId);
    set(reference, 
        {
            username: name,
            email: email,
            password: password
        }
    );
}

// CLIENTS
// create a client
export function createClient(clientId, name, email, password, callback) {
    const reference = ref(db, 'clients/' + clientId);
    set(reference,
      {
        clientName: name,
        clientEmail: email,
        clientPassword: password
      }
      ) 
}

// read all clients
export function readAllClients() {
  const clientsRef = ref(db, 'clients');
  onValue(clientsRef, (snapshot) => {
    const clients = snapshot.val();
    // Handle the list of clients
  });
}

// READ a client
export function readClient(clientId, callback) {
    const clientRef = ref(db, 'clients/' + clientId);
    get(clientRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const clientData = snapshot.val();
          callback(null, clientData);
        } else {
          callback("Client not found");
        }
      })
      .catch((error) => {
        callback(error);
      });
}

// UPDATE a client
export function updateClient(clientId, clientData) {
  const clientRef = ref(db, `clients/${clientId}`);
  update(clientRef, clientData);
}

// DELETE a client
export function deleteClient(clientId) {
  const clientRef = ref(db, `clients/${clientId}`);
  remove(clientRef);
}

// SHOPPING BAG
// create product in shopping bag
export function createProductInBag(clientId, productId, productData) {
  const bagRef = ref(db, `clients/${clientId}/bag/${productId}`);
  set(bagRef, productData);
}

// read shopping bag
export function readBag(clientId) {
  const bagRef = ref(db, `clients/${clientId}/bag`);
  onValue(bagRef, (snapshot) => {
    const products = snapshot.val();
    // Handle the list of products
  });
}

// update product quantity in shopping bag
export function updateProductQuantityInBag(clientId, productId, productData) {
  const productRef = ref(db, `clients/${clientId}/bag/${productId}`);
  update(productRef, productData);
}

// delete product from the bag
export function deleteProductFromBag(clientId, productId) {
  const productRef = ref(db, `clients/${clientId}/bag/${productId}`);
  remove(productRef);
}

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

// PRODUCTS
// create a product
export function createProduct(productId, category, callback) {
    const reference = ref(db, 'products/' + productId);
    set(reference, 
        {
            id: productId,  
            productName: name,
            productPrice: price,
            productCategory: category,
            averageRating: 0,
            ratingCount: 0
        }
    );
}

// READ all products
export function readAllProducts(callback) {
  const productsRef = ref(db, 'products');
  onValue(productsRef, (snapshot) => {
    const products = snapshot.val();
    callback(products)
  });
}


// READ a product
export function readProduct(productId, callback) {
    const productRef = ref(db, 'products/' + productId);
    get(productRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const productData = snapshot.val();
          callback(null, productData);
        } else {
          callback("Product not found");
        }
      })
      .catch((error) => {
        callback(error);
      });
  }


// UPDATE a product
export function updateProduct(productId, productData) {
  const productRef = ref(db, `products/${productId}`);
  update(productRef, productData);
}
  
// DELETE a product
export function deleteProduct(productId) {
  const productRef = ref(db, `products/${productId}`);
  remove(productRef);
}



// update the average rating and rating count after a review is added or updated
export function updateProductAverageRating(productId, newRating, previousRating = null) {
  const productRef = ref(db, 'products/' + productId);
  get(productRef).then((snapshot) => {
      if (snapshot.exists()) {
          const productData = snapshot.val();
          let totalRating = productData.averageRating * productData.ratingCount;
          
          // If previousRating exists, it's an update. Adjust total rating by removing previous and adding new.
          if(previousRating) {
              totalRating = totalRating - previousRating + newRating;
          } else { // Else, it's a new review. Simply add the new rating.
              totalRating += newRating;
              productData.ratingCount += 1;
          }
          
          const averageRating = totalRating / productData.ratingCount;
          update(productRef, { averageRating: averageRating, ratingCount: productData.ratingCount });
      }
  });
}



// PRODUCTS review
// CREATE a product review
export function createProductReview(productId, reviewId, reviewerName, reviewContent, rating) {
  const reviewRef = ref(db, `products/${productId}/ratings/${reviewId}`);
  set(reviewRef, {
      name: reviewerName,
      content: reviewContent,
      rating: rating
  }).then(() => {
      updateProductAverageRating(productId, rating);
  });
}


// READ all product reviews
export function readAllProductReviews(productId) {
  const reviewsRef = ref(db, `products/${productId}/reviews`);
  onValue(reviewsRef, (snapshot) => {
    const reviews = snapshot.val();
    // Handle the list of reviews
  });
}

// READ a product review
export function readProductReview(productId, reviewId, callback) {
  const reviewRef = ref(db, `products/${productId}/ratings/${reviewId}`);
  get(reviewRef).then((snapshot) => {
    if (snapshot.exists()) {
      const reviewData = snapshot.val();
      callback(null, reviewData);
    } else {
      callback("Review not found");
    }
  }).catch((error) => {
    callback(error);
  });
}


// UPDATE a product review
export function updateProductReview(productId, reviewId, updatedReviewerName, updatedReviewContent, updatedRating) {
  const reviewRef = ref(db, `products/${productId}/ratings/${reviewId}`);
  get(reviewRef).then((snapshot) => {
      if (snapshot.exists()) {
          const previousRating = snapshot.val().rating;
          update(reviewRef, {
              name: updatedReviewerName,
              content: updatedReviewContent,
              rating: updatedRating
          }).then(() => {
              updateProductAverageRating(productId, updatedRating, previousRating);
          });
      }
  });
}


// DELETE a product review
export function deleteProductReview(productId, reviewId) {
  const reviewRef = ref(db, `products/${productId}/ratings/${reviewId}`);
  remove(reviewRef);
}



// Fetch Popular Products

export function fetchTopRatedProducts(limit = 5, callback) {
  const productsRef = ref(db, 'products');
  const query = orderByChild(productsRef, 'averageRating').limitToLast(limit);
  
  get(query).then(snapshot => {
    if (snapshot.exists()) {
      const topRatedProducts = snapshot.val();
      callback(null, topRatedProducts);
    } else {
      callback("Nenhum produto achado");
    }
  }).catch(error => {
    callback(error);
  });
}




// INVENTORIES
// create product inventory
export function createProductInventory(productId, inventoryData) {
  const inventoryRef = ref(db, `products/${productId}/inventory`);
  set(inventoryRef, inventoryData);
}

// read product inventory
export function readProductInventory(productId) {
  const inventoryRef = ref(db, `products/${productId}/inventory`);
  get(inventoryRef).then((snapshot) => {
    if (snapshot.exists()) {
      const inventory = snapshot.val();
      // Handle the inventory data
    } else {
      console.log("Inventory not found");
    }
  }).catch((error) => {
    console.error(error);
  });
}

// update product inventory
export function updateProductInventory(productId, inventoryData) {
  const inventoryRef = ref(db, `products/${productId}/inventory`);
  update(inventoryRef, inventoryData);
}


// ORDERS
// create an order
export function createOrder(orderId, orderData) {
  set(ref(db, `orders/${orderId}`), orderData);
}

// read all orders
export function readAllOrders() {
  const ordersRef = ref(db, 'orders');
  onValue(ordersRef, (snapshot) => {
    const orders = snapshot.val();
    // Handle the list of orders
  });
}

// read an order
export function readOrder(orderId) {
  const orderRef = ref(db, `orders/${orderId}`);
  get(orderRef).then((snapshot) => {
    if (snapshot.exists()) {
      const order = snapshot.val();
      // Handle the order data
    } else {
      console.log("Order not found");
    }
  }).catch((error) => {
    console.error(error);
  });
}

// update an order
export function updateOrder(orderId, orderData) {
  const orderRef = ref(db, `orders/${orderId}`);
  update(orderRef, orderData);
}

// delete an order
export function deleteOrder(orderId) {
  const orderRef = ref(db, `orders/${orderId}`);
  remove(orderRef);
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


// STORES
// CREATE a store
export function createStore(storeId, storeName, storeData) {
  const storeRef = ref(db, `stores/${storeId}`);
  set(storeRef, {
    name: storeName,
    ...storeData
  });
}

// READ all stores
export function readAllStores2() {
  const storesRef = ref(db, 'stores');
  onValue(storesRef, (snapshot) => {
    const stores = snapshot.val();
    // Handle the list of stores
  });
}

// READ a store
export const readStore = async (storeId) => {
  const storeRef = ref(db, `stores/${storeId}`);
  const response = await get (storeRef)
    .then((snapshot) => {
      if(snapshot.exists()) {
        return snapshot.val()
      } else {
        console.log(`Store not found`);
        return;
      }
    })
    .catch((error) => {
      console.log(`Error to get store: ${error}`);
    })
    return response;
}

// UPDATE a store
export function updateStore(storeId, storeData) {
  const storeRef = ref(db, `stores/${storeId}`);
  update(storeRef, storeData);
}

// DELETE a store
export function deleteStore(storeId) {
  const storeRef = ref(db, `stores/${storeId}`);
  remove(storeRef);
}


// STORES PRODUCTS
// CREATE a store product
export function createStoreProduct(storeId, productId, productData) {
  const productRef = ref(db, `stores/${storeId}/products/${productId}`);
  set(productRef, productData);
}

// read all store products
export function readAllStoreProducts2(storeId, callback) {
  const productsRef = ref(db, `stores/${storeId}/products`);
  onValue(productsRef, (snapshot) => {
    const products = snapshot.val();
    callback(null, products);
  });
}

export const readAllStoreProducts = async (storeId) => {
  const productsRef = ref(db, `stores/${storeId}/products`);
  const response = await get(productsRef)
    .then((snapshot) => {
    return snapshot.val()
  })
    .catch((error) => {
      console.log(`Error to get products: ${error}`)
    })
  return response;
};

// read a store product
export function readStoreProduct(storeId, productId) {
  const productRef = ref(db, `stores/${storeId}/products/${productId}`);
  get(productRef).then((snapshot) => {
    if (snapshot.exists()) {
      const product = snapshot.val();
      // Handle the store product data
    } else {
      console.log("Store product not found");
    }
  }).catch((error) => {
    console.error(error);
  });
}

// update a store product
export function updateStoreProduct(storeId, productId, productData) {
  const productRef = ref(db, `stores/${storeId}/products/${productId}`);
  update(productRef, productData);
}

// delete a store product
export function deleteStoreProduct(storeId, productId) {
  const productRef = ref(db, `stores/${storeId}/products/${productId}`);
  remove(productRef);
}