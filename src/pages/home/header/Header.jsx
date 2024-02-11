import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <nav className="ha-home-header fixed-top navbar navbar-expand-sm mx-2 mt-2 mt-sm-0">
      <div className="container">
        <a className="navbar-brand" href="#">
          <span className='text-secondary'>Happy</span>
          <span className='text-primary'>App</span>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav ms-auto d-flex flex-row justify-content-center mt-3">
            <li>
              <a class="btn btn-secondary mx-2" href="#">Connexion</a>
            </li>
            <li>
              <a class="btn btn-secondary" href="#">Inscription</a>
            </li>
          </ul>
        </div>


      </div>
    </nav>
  );
};

export default Header;