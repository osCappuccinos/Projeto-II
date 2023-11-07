import App from "./App";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

export const routes = [
    {
      path: '/',
      element: <App />, 
      children: [
         {
            path: '/',
            element: <Products />
         },
         {
            path: '/produtos/:id',
            element: <ProductDetails />
         },
      ]
   },
];