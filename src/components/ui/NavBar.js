import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="navbar-container">
        <Link className="navbar__logo" to="/">
          Final Project
        </Link>
        <button
          aria-controls="basic-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          type="button"
          data-toggle="collapse"
          data-target="#basic-navbar-nav"
          className="navbar__btn"
          onClick={() => setShow(!show)}
        >
          <span className="navbar__btn-icon"></span>
        </button>
        <div
          className={`navbar-collapse collapse ${show && 'show'}`}
          id="basic-navbar-nav"
        >
          <div className="navbar-nav">
            <NavLink className="nav__link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav__link" to="/about">
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
