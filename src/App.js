import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.scss';

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/connexion' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
