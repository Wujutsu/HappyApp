import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Curve from '../../components/curve/Curve';
import Mood from './mood/Mood';
import Labels from './labels/Labels';

const Application = () => {
  const location = useLocation();
  const [pathCurrentPage, setPathCurrentPage] = useState('');

  useEffect(() => {
    setPathCurrentPage(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Curve />
      <div className='container'>
        {pathCurrentPage === "/mood" && <Mood />}
        {pathCurrentPage === "/labels" && <Labels />}
      </div>
    </>
  );
};

export default Application;