import React from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Outlet } from 'react-router-dom'
import ProductList from './components/ProductList'

function App() {
  return (
    <div>
      <Header/>
     <Outlet/>
    </div>
  )
}

export default App
