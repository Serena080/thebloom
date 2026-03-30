import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Notfound.css'

const Notfound = () => {
  return (
    <div className="notfound-wrapper">

      <div className="leaf leaf1"></div>
      <div className="leaf leaf2"></div>
      <div className="leaf leaf3"></div>

      <div className="notfound-card">
        <h1>404</h1>
        <h2>Oops! Page not found 🌿</h2>
        <p>The page you are looking for may have been moved or does not exist.</p>

        <Link to="/" className="home-btn">
          Back Home
        </Link>
      </div>

    </div>
  )
}

export default Notfound;