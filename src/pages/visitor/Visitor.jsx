import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Home from './home/Home';
import Login from './login/Login';
import Signup from './signup/Signup';

import Curve from '../../components/curve/Curve';
import NavBar from '../../components/navbar/Navbar';

const Visitor = () => {
  const location = useLocation();
  const [pathCurrentPage, setPathCurrentPage] = useState('');

  useEffect(() => {
    setPathCurrentPage(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Curve />
      <div className='container'>
        <NavBar />
        {pathCurrentPage === "/" && <Home />}
        {pathCurrentPage === "/connexion" && <Login />}
        {pathCurrentPage === "/inscription" && <Signup />}
      </div>
    </>
  );
};

export default Visitor;