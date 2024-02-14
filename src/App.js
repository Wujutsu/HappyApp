import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.scss';

import Visitor from "./pages/visitor/Visitor";
import Application from "./pages/application/Application";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Visitor */}
          <Route path='/' element={<Visitor />} />
          <Route path='/connexion' element={<Visitor />} />
          <Route path='/inscription' element={<Visitor />} />
          {/* Application */}
          <Route path='/mood' element={<Application />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
