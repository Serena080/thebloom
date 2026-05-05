import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* Brand */}
          <div className="col-md-3 mb-4">
            <h4 className="fw-bold text-success">The Bloom</h4>
            <p>
              Bringing nature closer to your home 🌿 <br />
              Discover beautiful indoor plants, planters, and care essentials.
            </p>

            <div className="d-flex gap-3 mt-3">
              <a href="/" className="text-light fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="/" className="text-light fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.pinterest.com/search/pins/?q=plants%20aesthetic&rs=ac&len=6&source_id=ac_yJu8RkTa&eq=plants&etslf=4810" className="text-light fs-4">
                <i className="bi bi-pinterest"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/signup" className="text-light text-decoration-none">Sign Up</Link></li>
              <li><Link to="/signin" className="text-light text-decoration-none">Sign In</Link></li>
              <li><Link to="/addproducts" className="text-light text-decoration-none">Introduce</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold">Resources</h5>
            <ul className="list-unstyled">
              <li><Link to="/plants" className="text-light text-decoration-none">Plant Care Library</Link></li>
              <li><Link to="/blog" className="text-light text-decoration-none">Blog</Link></li>
              <li><Link to="/garden-ideas" className="text-light text-decoration-none">Courses</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold">Customer Support</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">FAQs</Link></li> 
              <li><Link to="/" className="text-light text-decoration-none">Shipping</Link></li>
              
              <li><Link  className="text-light text-decoration-none">Plant Care Tips</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p>Email: support@thebloom.com</p>
            <p>Phone: +254 700 000 000</p>

            <h6 className="fw-bold">Download App</h6>

            <img
              src="https://plantly.io/wp-content/uploads/2020/10/badge_apple.png"
              alt="App Store"
              width="140"
              className="mb-2"
            />

            <br />

            <img
              src="https://plantly.io/wp-content/uploads/2020/10/badge_android.png"
              alt="Google Play"
              width="140"
            />
          </div>
        </div>

        <hr className="border-light" />

        <div className="d-md-flex justify-content-between text-center">
          <p className="mb-2">© 2026 The Bloom. All Rights Reserved 🌱</p>

          <div>
            <Link to="/" className="text-light text-decoration-none me-3">
              Privacy Policy
            </Link>

            <Link to="/" className="text-light text-decoration-none me-3">
              Terms & Conditions
            </Link>

            <Link to="/" className="text-light text-decoration-none">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;