import React from 'react'
import Cart from './components/Cart'
import Home from './components/Home'
import { Link, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <style>
        {`
          nav {
            background-color: #333;
            padding: 1rem;
            text-align: center;
          }

          nav a {
            color: white;
            margin: 0 1rem;
            text-decoration: none;
            font-weight: bold;
          }

          nav a:hover {
            color: #ffcc00;
          }

          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
          }
        `}
      </style>

      <nav>
        <Link to="/">Home</Link> |
        <Link to="/cart">Cart</Link> |
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
