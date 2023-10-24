
import { createProduct, readProduct } from './firebaseController.js'; 
 
  createProduct('product456', 'Bolsa de crochê', 19.99, 'Acessório', (error, data) => {
    logCallback({error, data})
  }  );

  readProduct('product456', (error, data) => {
    logCallback({error, data})
  }  );