import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';
import ProductDes from '../Components/ProductDes';
import Cart from '../Components/Cart';
import UserSignup from '../Components/UserSignup';
import UserLogin from '../Components/UserLogin';


function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDes />} />
      <Route path="/cart/:id" element={<Cart />} />
      <Route path="userSignup" element={<UserSignup />} />
      <Route path="userLogin" element={<UserLogin />} />

        </Routes>
  );
}
export default Routing;
