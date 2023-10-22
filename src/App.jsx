import { useState } from 'react'
import './App.css'
import Produtos from './pages/Products'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="container">
      <div className='card-grid'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
