import App from "./App";
import Products from "./pages/Products";

export const routes = [
    {
      path: '/',
      element: <App />, 
      children: [
         {
            path: '/',
            element: <Products />
         },
      ]
   },
]