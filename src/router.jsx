import App from "./App";
import Checkout1 from './pages/Checkout/Checkout1';
import Checkout2 from "./pages/Checkout/Checkout2"; // Corrected the folder name
import Checkout3 from "./pages/Checkout/Checkout3";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Store from "./pages/Store";
import Client from "./pages/Client";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import ProductsByCategory from "./pages/ProductsByCategory"; // Add this import
import Ruma from "./pages/Ruma";

export const routes = [
   {
      path: '/',
      element: <App />,
      children: [
         {
            path: '/',
            element: <Home />
         },
         {
            path: '/produtos',
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
            element: <Checkout1 />
         },
         {
            path: '/checkout2',
            element: <Checkout2 />
         },
         {
            path: '/checkout3',
            element: <Checkout3 />
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
            path: '/client',
            element: <Client />
         },
         {
            path: '/parceiros',
            element: <Partners />
         },
         {
            path: '/ruma',
            element: <Ruma />
         }
      ]
   }
];
