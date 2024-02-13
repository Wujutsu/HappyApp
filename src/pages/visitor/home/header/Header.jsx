import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <section className='ha-home-header vh-100 text-center d-flex flex-column justify-content-center align-items-center '>
      <h1 className='ha-title'>
        <span className='text-secondary'>Happy</span>
        <span className='text-primary'>App</span>
      </h1>
      <div className='h4 text-primary'>Un jour, un mood, une mélodie</div>
      <p className='mt-4'>Crée ton journal émotionnel en associant ta journée à une mélodie, suis ton humeur quotidienne, découvre le bonheur dans les petites choses de la vie.</p>
    </section>
  );
};

export default Header;