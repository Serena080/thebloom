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
import GardenIdeas from './components/Gardenideas';
import Plants from './components/Plants';
import DesignGarden from './components/Designgarden';
import PlantChatBlog from './components/Blog';

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
          <Route path="/garden-ideas" element={<GardenIdeas />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/design-garden" element={<DesignGarden />} />
        <Route path='/blog'element={<PlantChatBlog/>}/>
        </Routes>

        <section className="content-links-block py-5">
      <div className="container text-center">
        <h2 className="h3 mb-4">Create the garden you’ve always wanted</h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4 h-100">
              <Link to="/garden-ideas" className="text-decoration-none text-dark">
                <i className="fas fa-seedling fa-2x mb-3 text-success"></i>
                <h3 className="h5">Get garden design ideas</h3>
                <p>Find your perfect garden</p>
              </Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4 h-100">
              <Link to="/plants" className="text-decoration-none text-dark">
                <i className="fas fa-leaf fa-2x mb-3 text-success"></i>
                <h3 className="h5">Find the plants that work for you</h3>
                <p>Ideas for seasons and regions</p>
              </Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4 h-100">
              <Link to="/design-garden" className="text-decoration-none text-dark">
                <i className="fas fa-pencil-ruler fa-2x mb-3 text-success"></i>
                <h3 className="h5">Design your garden</h3>
                <p>Use interactive tools to design your dream garden</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
        

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
                <p>Email: support@thebloom.com</p>
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