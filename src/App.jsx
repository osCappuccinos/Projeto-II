import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/menu/navbar';
import SearchBar from './components/menu/searchbar';
import NavbarProducts from './components/menu/navbarProducts'


function App() {
  return (
    <div className="container">
      <SearchBar />
      <Navbar />
      <NavbarProducts />
      <Outlet />
    </div>
  );
}

export default App;
