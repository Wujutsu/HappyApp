import React from 'react';
import googleLogo from '../../assets/google.svg';
import facebookLogo from '../../assets/facebook.png';

const Connection = () => {
  return (
    <form>
      <div className='mb-4'>
        <label className='form-label' htmlFor='typeEmail'>Email</label>
        <input type='email' id='typeEmail' className='form-control' />
      </div>

      <div className='mb-4'>
        <label className='form-label' htmlFor='typePassword'>Mot de passe</label>
        <input type='password' id='typePassword' className='form-control form-control-lg' />
      </div>

      <button className='btn btn-outline-primary w-100 mt-2 mb-3 text-white' type='submit'>Continuer</button>

      <button className='btn btn-outline-secondary w-100 mt-3 text-white'>
        <img src={googleLogo} alt='Google' width={24} height={24} />
        Connexion avec Google
      </button>

      <button className='btn btn-outline-secondary w-100 mt-3 text-white'>
        <img src={facebookLogo} alt='Facebook logo' width={26} height={26} />
        Connexion avec Facebook
      </button>
    </form>
  );
};

export default Connection;