import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/menu/navbar';
import NavbarProducts from './components/menu/navbarProducts'
import { fetchTopRatedProducts } from './service/firebase/firebaseController'; // adjust path
import TopRatedProducts from './components/algorithm/TopRatedProducts'

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
      <TopRatedProducts />
    </div>
  );
}

export default App;
