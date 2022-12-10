import React, { useEffect, useState, createContext  } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Cart from './features/cart/Cart';
import Checkout from './features/checkout/Checkout';
import Home from './features/home/Home';
import {getUser} from './services/user';
import { ToastContainer } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';
import { getCartProducts } from './services/products';

export const CartContext = createContext()

function App() {
  const [products, setProducts] = useState([])
  const getProducts = async () => {
    await getCartProducts().then(product => {
      setProducts(product)
   }) 
  }
  useEffect(() => {
    getProducts()
  }, [products]) 
  const value = { products, setProducts};
  return (
    <BrowserRouter>
      <CartContext.Provider value={value}>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      </CartContext.Provider>
      <ToastContainer floatingTime={2000} />
    </BrowserRouter>
  );
}

export default App;
