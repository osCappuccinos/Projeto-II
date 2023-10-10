import { useState } from 'react'
import './App.css'
import Produtos from './pages/Products'

function App() {

  return (
    <div className="container">
      <div className='card-grid'>
        <Produtos></Produtos>
      </div>
    </div>
  )
}

export default App
