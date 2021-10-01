import React from 'react';
import logo from '../images/camdadLogoNew3.png';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light menu shadow fixed-top">
        <div className="container nav-section">
          <Link to="/" className="navbar-brand"> 
              <img src={logo} style={{width: "3rem"}} alt="logo" /> <span className="logo-heading">camdad</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active active1" aria-current="page">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/AboutUs" className="nav-link">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/ContactUs" className="nav-link">Contact Us</NavLink>
              </li>
            </ul>
           <div className="navbar-btn">
             <Link to="/SignUp">
             <button type="button" className="btn-navbar">login</button>
             </Link>
           </div>
          </div>
        </div>
      </nav>  
 
    )
} 

export default Navbar;