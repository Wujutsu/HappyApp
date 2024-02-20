import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Curve from '../../components/curve/Curve';
import Moods from './moods/Moods';
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
        {pathCurrentPage === "/moods" && <Moods />}
        {pathCurrentPage === "/labels" && <Labels />}
      </div>
    </>
  );
};

export default Application;