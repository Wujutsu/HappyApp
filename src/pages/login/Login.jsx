import React from 'react';
import './Login.scss';
import Curve from '../../components/curve/Curve';

const Login = () => {
  return (
    <>
      <Curve />

      <section class="vh-100">

        <div class="container h-100">

          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">

              <div class="card bg-dark text-primary" >
                <div class="card-body p-5">


                  <h2 class="fw-bold mb-2 text-center mb-2">Connexion</h2>

                  <div class="mb-4">
                    <label class="form-label" for="typeEmail">Email</label>
                    <input type="email" id="typeEmail" class="form-control" />
                  </div>

                  <div class="mb-4">
                    <label class="form-label" for="typePassword">Mot de passe</label>
                    <input type="password" id="typePassword" class="form-control form-control-lg" />
                  </div>

                  <p class="small pb-lg-2 text-end"><a class="text-white" href="#!">Mot de passe oublié?</a></p>

                  <button class="btn btn-outline-secondary w-100 mt-2" type="submit">Se connecter</button>

                  <button class="btn btn-outline-secondary w-100 mt-5" type="submit">Se connecter avec Google</button>

                  {/* <div>
                    <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
                    </p>
                  </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;