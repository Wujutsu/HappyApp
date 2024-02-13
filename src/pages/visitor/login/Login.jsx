import React from 'react';
import Connection from '../../../components/connection/Connection';

const Login = () => {

  return (
    <section className='ha-login vh-100'>
      <div className='row d-flex justify-content-center align-items-center h-100'>
        <div className='col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5'>

          <div className='card bg-dark rounded-4' >
            <div className='card-body text-primary px-4 px-sm-5 py-5'>
              <h2 className='fw-bold mb-2 text-center mb-2'>Connexion</h2>
              <Connection />
              <div className='small text-center mt-4'>
                <a className='text-white' href='#!'>Mot de passe oublié?</a>
              </div>
            </div>
          </div>

          <div className='small text-center mt-3'>
            Tu n'as pas encore de compte?
            <a href='/inscription' className='text-primary mx-1'>S'inscrire</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;