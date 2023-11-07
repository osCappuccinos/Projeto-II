import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/menu/navbar';
import NavbarProducts from './components/menu/navbarProducts'

function App() {
  return (
    <div className="container">
      <Navbar />
      <NavbarProducts />
      <Outlet />
    </div>
  );
}

export default App;
