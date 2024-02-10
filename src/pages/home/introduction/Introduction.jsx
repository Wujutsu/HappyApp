import React from 'react';
import './Introduction.scss';

const Introduction = () => {
  return (
    <div className='ha-home-introduction text-center d-flex flex-column justify-content-center align-items-center '>
      <h1 className='ha-title'>
        <span className='text-secondary'>Happy</span>
        <span className='text-primary'>App</span>
      </h1>
      <div className='h5 text-primary'>Un jour, un mood, une mélodie</div>
      <p className='mt-4'>Crée ton journal émotionnel en associant ta journée à une mélodie, suis ton humeur quotidienne, découvre le bonheur dans les petites choses de la vie.</p>
    </div>
  );
};

export default Introduction;