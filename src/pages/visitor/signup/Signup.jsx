import React from 'react';
import Connection from '../../../components/connection/Connection';

const Signup = () => {
  return (
    <section className='ha-signup vh-100'>
      <div className='row d-flex justify-content-center align-items-center h-100'>
        <div className='col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5'>

          <div className='card bg-dark rounded-4' >
            <div className='card-body text-primary px-4 px-sm-5 py-5'>
              <h2 className='fw-bold mb-2 text-center mb-2'>Inscription</h2>
              <Connection />
            </div>
          </div>

          <div className='small text-center mt-3'>
            Tu as déjà un compte?
            <a href='/connexion' className='text-primary mx-1'>Se connecter</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;