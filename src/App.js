import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Notfound from './components/Notfound';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';

function App() {
  return (
    <Router>
      <div className="App">

        {/* Header */}
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
          href="#"
          role="button"
          data-bs-toggle="dropdown"
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
            <Link className="dropdown-item" to="/lowlightplants">
              Low Light Plants
            </Link>
          </li>

          <li>
            <Link className="dropdown-item" to="/petfriendly">
              Pet Friendly Plants
            </Link>
          </li>

          <li>
            <Link className="dropdown-item" to="/largeplants">
              Large Plants
            </Link>
          </li>

          <li>
            <Link className="dropdown-item" to="/succulents">
              Succulents
            </Link>
          </li>

        </ul>
      </li>

      {/* Accessories Dropdown */}
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle text-dark"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
        >
          Accessories
        </a>

        <ul className="dropdown-menu">

          <li>
            <Link className="dropdown-item" to="/pots">
              Pots & Planters
            </Link>
          </li>

          <li>
            <Link className="dropdown-item" to="/wateringtools">
              Watering Tools
            </Link>
          </li>

          <li>
            <Link className="dropdown-item" to="/fertilizers">
              Fertilizers
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

    <button className="btn btn-outline-success rounded-pill px-4">
      Cart
    </button>

  </div>
</nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Getproducts />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/addproducts" element={<Addproducts />} />
          <Route path="/makepayment" element={<Makepayment />} />
          <Route path="*" element={<Notfound />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-dark text-light pt-5 pb-3 mt-5">
          <div className="container">
            <div className="row">

              <div className="col-md-4 mb-4">
                <h4 className="fw-bold text-success">The Bloom</h4>
                <p>
                  Bringing nature closer to your home 🌿
                  Discover beautiful indoor plants, planters, and care essentials.
                </p>
              </div>

              <div className="col-md-2 mb-4 ">
                <h5 className="fw-bold">Quick Links</h5>
                <ul className="list-unstyled">
                  <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
                  <li><Link to="/signup" className="text-light text-decoration-none">Sign Up</Link></li>
                  <li><Link to="/signin" className="text-light text-decoration-none">Sign In</Link></li>
                  <li><Link to="/addproducts" className="text-light text-decoration-none">Introduce</Link></li>
                </ul>
              </div>

              <div className="col-md-3 mb-4">
                <h5 className="fw-bold">Customer Support</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-light text-decoration-none">FAQs</a></li>
                  <li><a href="#" className="text-light text-decoration-none">Shipping</a></li>
                  <li><a href="#" className="text-light text-decoration-none">Returns</a></li>
                  <li><a href="#" className="text-light text-decoration-none">Plant Care Tips</a></li>
                </ul>
              </div>

              <div className="col-md-3 mb-4">
                <h5 className="fw-bold">Contact Us</h5>
                <p>Email: support@thesill.com</p>
                <p>Phone: +254 700 000 000</p>

                <div>
                  <a href="#" className="text-light me-3">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="text-light me-3">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="text-light me-3">
                    <i className="bi bi-twitter"></i>
                  </a>
                </div>
              </div>

            </div>

            <hr className="border-light" />

            <div className="text-center">
              <p className="mb-0">© 2026 The Bloom. All Rights Reserved 🌱</p>
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;