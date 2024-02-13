import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.scss';

import Visitor from "./pages/visitor/Visitor";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Visitor />} />
          <Route path='/connexion' element={<Visitor />} />
          <Route path='/inscription' element={<Visitor />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
