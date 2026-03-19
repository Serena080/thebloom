import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3">

      <Link className="navbar-brand fw-bold text-success" to="/">
        Palmar Grove
      </Link>

      <button
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navMenu">

        <ul className="navbar-nav mx-auto">

          <li className="nav-item">
            <Link className="nav-link text-dark" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-dark" to="/signin">Sign In</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-dark" to="/signup">Sign Up</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-dark" to="/addproducts">Introduce a plant</Link>
          </li>

          

        </ul>

        <button className="btn btn-outline-success rounded-pill px-4">
          Cart
        </button>

      </div>
    </nav>
  )
}

export default Navbar