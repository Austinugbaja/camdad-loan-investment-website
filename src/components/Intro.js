import React from 'react';
import './Intro.css';
import Image from './intro-image.png';
import WavyBackground from './WavyBackground';

const Intro = () => {
    return (
        <div id="home" className="intro-section">
            <div className="container">
                <div className="row align-items-center text-white">
                    <div className="col-md-6 intros">
                        <h1 className="display-2">
                            <span className="display-2--intro">A Simple Way to Get Loan to Finance Your Business Today</span>
                            <span className="display-2--description lh-base mt-4">Camdad is a platform for getting the best business loans at the best rate, why not give us a trial.</span>
                        </h1>
                        <div className="intro-btn">
                        <button type="button" className="btn-text">Get Started</button>
                        </div>
                    </div>
                    <div className="col-md-6 intros hero-img d-none d-md-block">
                        <img src={Image} alt="intro" className="image-fluid" />
                    </div>
                </div>
            </div>
            <WavyBackground />
        </div>
    )
}

export default Intro;
