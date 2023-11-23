import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/menu/navbar';
import NavbarProducts from './components/menu/navbarProducts'
import FooterEnd from './components/footer/FooterEnd';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
      <FooterEnd />
    </div>
  );
}

export default App;
