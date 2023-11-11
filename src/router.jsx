import App from "./App";
import Checkout_1 from "./pages/Checkout_1";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Store from "./pages/Store";

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
         {
            path: 'lojas/:id',
            element: <Store />
         },
         {
            path: '/checkout',
            element: <Checkout_1 />
         },
      ]
   },
];