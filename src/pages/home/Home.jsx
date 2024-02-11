import React from 'react';
import './Home.scss';
import Header from './header/Header';
import Introduction from './introduction/Introduction';

const Home = () => {
  return (
    <div className='ha-home'>
      <Header />
      <Introduction />
    </div>
  );
};

export default Home;