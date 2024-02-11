import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/connexion' element={<Login />} />
    </Routes>
  );
};

export default Routing;