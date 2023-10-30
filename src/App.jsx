import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/menu/navbar';
import NavbarProducts from './components/menu/navbarProducts'
import { fetchTopRatedProducts } from './service/firebaseController'; // adjust path

function App() {

  /*
  fetchTopRatedProducts(1, (error, data) => {
    console.log(data)
  })
*/ 

  return (
    <div className="container">
      <Navbar />
      <NavbarProducts />
      <Outlet />
    </div>
  );
}

export default App;
