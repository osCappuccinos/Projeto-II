import App from "./App";
import Checkout1 from './pages/Checkout/Checkout1';
import Checkout2 from "./pages/checkout/Checkout2";
import Checkout3 from "./pages/Checkout/Checkout3";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import ProductsByCategory from "./pages/ProductsByCategory";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Store from "./pages/Store";
import User from "./pages/Client";

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
            path: '/lojas/:id',
            element: <Store />
         },
         {
            path: '/categorias/:id',
            element: <ProductsByCategory />
         },
         {
            path: '/checkout',
            element: <Checkout1/>
         },
         {
            path: '/checkout2',
            element: <Checkout2/>
         },
         {
            path: '/checkout3',
            element: <Checkout3/>
         },
         {
            path: '/signin',
            element: <SignIn />
         },
         {
            path: '/signup',
            element: <SignUp />
         },
         {
            path: '/user',
            element: <User />
         }
      ]
   },
];