import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <header className="App-header">
      <h1>The Bloom - #PlantsMakePeopleHappy</h1>

      <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3">
        <Link className="navbar-brand fw-bold text-success" to="/">
          The Bloom
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav mx-auto nav-details">

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">Home</Link>
            </li>

            {/* Plants Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                onClick={(e) => e.preventDefault()}
              >
                Plants
              </a>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/indoorplants">
                    Indoor Plants
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/petfriendly">
                    Pet Friendly Plants
                  </Link>
                </li>
              </ul>
            </li>

            {/* Accessories Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                onClick={(e) => e.preventDefault()}
              >
                Accessories
              </a>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/pots">
                    Pots & Planters
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/signin">Sign In</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/signup">Sign Up</Link>
            </li>
          </ul>

          <Searchbar />
        </div>
      </nav>
    </header>
  );
};

export default Header;