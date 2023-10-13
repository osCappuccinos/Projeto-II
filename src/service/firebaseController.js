import { db } from "./firebase-config";
import { ref, set, get} from "firebase/database"

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


export function createProduct(productId, name, price, category, callback) {
    const reference = ref(db, 'product/' + productId);
    set(reference, 
        {
            productName: name,
            productPrice: price,
            productCategory: category
        }
    );
}


export function readProduct(productId, callback) {
    const productRef = ref(db, 'product/' + productId);
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
  
