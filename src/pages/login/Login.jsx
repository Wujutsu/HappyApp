import React from 'react';
import './Login.scss';
import googleLogo from '../../assets/google.svg';
import facebookLogo from '../../assets/facebook.png';
import Curve from '../../components/curve/Curve';

const Login = () => {
  return (
    <>
      <Curve />

      <section class='vh-100'>
        <div class='container h-100'>
          <div class='row d-flex justify-content-center align-items-center h-100'>
            <div class='col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5'>

              <div class='card bg-dark rounded-4' >
                <form class='card-body text-primary px-4 px-sm-5 py-5'>

                  <h2 class='fw-bold mb-2 text-center mb-2'>Connexion</h2>

                  <div class='mb-4'>
                    <label class='form-label' for='typeEmail'>Email</label>
                    <input type='email' id='typeEmail' class='form-control' />
                  </div>

                  <div class='mb-4'>
                    <label class='form-label' for='typePassword'>Mot de passe</label>
                    <input type='password' id='typePassword' class='form-control form-control-lg' />
                  </div>

                  <button class='btn btn-outline-primary w-100 mt-2 mb-3 text-white' type='submit'>Se connecter</button>

                  <button class='btn btn-outline-secondary w-100 mt-3 text-white'>
                    <img src={googleLogo} alt='Google' width={24} height={24} />
                    Connexiom avec Google
                  </button>

                  <button class='btn btn-outline-secondary w-100 mt-3 text-white'>
                    <img src={facebookLogo} alt='Facebook logo' width={26} height={26} />
                    Connexion avec Facebook
                  </button>

                  <div class='small text-center mt-4'>
                    <a class='text-white' href='#!'>Mot de passe oublié?</a>
                  </div>

                </form>
              </div>

              <div className='small text-center mt-3'>
                  Tu n'as pas encore de compte? 
                  <a href='/inscription' class='text-primary mx-1'>S'inscrire</a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;