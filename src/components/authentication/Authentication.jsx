import React from 'react';
import FormAuthentication from './formAuthentication/FormAuthentication';

const Authentication = ({ title, passwordForget, actionText, actionLink, actionTextLink }) => {
  return (
    <section className='vh-100'>
      <div className='row d-flex justify-content-center align-items-sm-center mt-10 mt-sm-0 h-100'>
        <div className='col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5'>

          <div className='card bg-dark rounded-4' >
            <div className='card-body text-primary px-4 px-sm-5 py-5'>
              <h2 className='fw-bold mb-2 text-center mb-2'>{title}</h2>
              <FormAuthentication />
              {passwordForget && (
                <div className='small text-center mt-4'>
                  <a className='text-white' href='#!'>Mot de passe oublié?</a>
                </div>
              )}
            </div>
          </div>

          <div className='small text-center mt-3'>
            {actionText}
            <a href={actionLink} className='text-primary ms-1'>{actionTextLink}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authentication;