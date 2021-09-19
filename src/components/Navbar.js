import React, { useState } from 'react';
import logo from './camdadlogo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light menu shadow fixed-top">
        <div className="container nav-section">
          <Link to="/" className="navbar-brand"> 
              <img src={logo} style={{width: "8rem"}} alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link  to='/testimonials'className="nav-link">Testimonials</Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className="nav-link">faq</Link>
              </li>
              <li className="nav-item">
                <Link to='/portfolio' className="nav-link">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
           <div className="navbar-btn text-center">
           <button type="button" className="btn-navbar">login</button>
           </div>
          </div>
        </div>
      </nav>
 
    )
} 

export default Navbar;