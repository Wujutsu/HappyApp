import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <nav className="ha-home-header fixed-top navbar navbar-expand-sm mx-2">
      <div className="container">
        <a className="navbar-brand" href="/">
          <span className='text-secondary'>Happy</span>
          <span className='text-primary'>App</span>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarToggler">
          <ul class="navbar-nav ms-auto d-flex flex-row justify-content-evenly mt-4 mt-sm-1">
            <li>
              <a class="btn btn-outline-secondary btn-large mx-0 mx-sm-3" href="/connexion">Connexion</a>
            </li>
            <li>
              <a class="btn btn-outline-primary btn-large" href="/inscription">Inscription</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;