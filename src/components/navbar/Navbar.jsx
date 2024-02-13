import React from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.scss';

const NavBar = () => {
  const location = useLocation();
  const homePage = location.pathname === '/';

  return (
    <nav className="fixed-top navbar navbar-expand-sm mx-2">
      <div className="container">
        <a className="navbar-brand" href="/">
          <span className='text-secondary'>Happy</span>
          <span className='text-primary'>App</span>
        </a>

        {homePage && (
          <>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav ms-auto d-flex flex-row justify-content-evenly mt-4 mt-sm-1">
                <li>
                  <a className="btn btn-outline-secondary mx-0 mx-sm-3 fw-medium" href="/connexion">Connexion</a>
                </li>
                <li>
                  <a className="btn btn-outline-primary fw-medium" href="/inscription">Inscription</a>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;