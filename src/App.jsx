import { useState } from 'react'
import './App.css'
import Products from './pages/Products'

function App() {

  return (
    <div className="container">
      <div className='card-grid'>
        <Products></Products>
      </div>
    </div>
  )
}

export default App
