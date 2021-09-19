import React from 'react';
import Logo from './camdadlogo.png';
import './Footer.css';
import '@fortawesome/fontawesome-free';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div id="footer">
            <div className="container footer-section">
                <div className="row">
                    <div className="col-md-5">
                        <img src={Logo} alt="camdad logo" className="camdad-image" />
                        <p className="footer-contact-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius sequi, numquam delectus sit vitae est laboriosam nostrum vel consequuntur eligendi?</p>
                        <div>
                            <span className="footer-social-icons"><FontAwesomeIcon icon={faGooglePlusG} /></span>
                            <span className="footer-social-icons"><FontAwesomeIcon icon={faFacebookF} /></span>
                            <span className="footer-social-icons"><FontAwesomeIcon icon={faTwitter} /></span>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h1 className="footer-contact-heading">Camdad Links</h1>
                        <p className="contact-items">Home</p>
                        <p className="contact-items">About Us</p>
                        <p className="contact-items">Contact Us</p>
                    </div>
                    <div className="col-md-2">
                        <h1 className="footer-contact-heading">Contact Us</h1>
                        <p className="contact-links">07063102733</p>
                        <p className="contact-links">ceo@camdadinvest.com</p>
                        <p className="contact-links">Address goes here</p>
                        <p className="contact-links app-link">Download our App</p>
                    </div>
                    <div className="col-md-3">
                        <h1 className="footer-contact-heading">Camdad Instagram</h1>
                        <div className="designer">
                            <p>&#169; 2021 Designed by codesamurai</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
