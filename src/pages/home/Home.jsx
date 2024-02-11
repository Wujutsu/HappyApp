import React from 'react';
import './Home.scss';
import Header from './header/Header';
import Introduction from './introduction/Introduction';
import Curve from '../../components/curve/Curve';

const Home = () => {
  return (
    <div className='ha-home'>
      <Curve />
      <div className='container'>
        <Header />
        <Introduction />
      </div>
    </div>
  );
};

export default Home;