import React from 'react';
import aboutHeroLogo from "../images/aboutHeroImage.png";
import '../styles/AboutUsHeroSection.css';
import AboutWavybg from './AboutWavybg';

const AboutUsHeroSection = () => {
    return (
        <div id="about-us-hero">
            <div className="container about-us-section">
                <div className="row">
                    <div className="col-md-6 about-first-hero-section">
                        <h1 className="about-us-hero-heading">a simple way to <br /> finance your business today</h1>
                        <p className="about-us-hero-desc fw-semi-bold">Camdad is a platform for getting the best business loans at the best rate, why not give us a trial.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={aboutHeroLogo} className="about-hero-img" alt="finance your business" />
                    </div>
                </div>
            </div>
            <AboutWavybg />
        </div>
    )
}

export default AboutUsHeroSection;
