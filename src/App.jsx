import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/menu/Navbar'

function App() {

  return (
    <div className="container">
      <Outlet />
      <Navbar />
    </div>
  )
}

export default App
