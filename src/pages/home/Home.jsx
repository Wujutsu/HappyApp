import React from 'react';
import './Home.scss';
import Curve from '../../components/curve/Curve';
import Header from './header/Header';
import Introduction from './introduction/Introduction';

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