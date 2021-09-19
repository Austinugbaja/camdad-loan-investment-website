import React from 'react';
import WavyBackgroundTwo from './WavyBackgroundTwo';
import WelcomeImg from './welcome-img.png';
import './Welcome.css';

const Welcome = () => {
    return (
        <div id="welcome" className="welcome-you">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-6">
                        <img src={WelcomeImg} className="image" alt="welcome" />
                    </div>
                    <div className="col-md-6">
                        <h1 className="display-6 fw-bold text-start">Welcome to Camdad</h1>
                        <div className="heading-line"></div>
                        <div className="bg-white mt-4 text-start">
                            <p className="fw-semi-bold">
                            Camdad is an online platform owned and managed by Camdad Investment Ltd and established and incorporated in Nigeria. There's a Camdad personal loan for all of Life's needs, from the little ones to the big ones. Consolidate debt, Go on vacation, Get the kids off to school. All on your terms.
                            </p>
                        </div>
                        <div className="pt-5 text-start">
                        <button type="button" className="welcome-btn">DISCOVER</button>
                        </div>
                    </div>
                </div>
            </div>
            <WavyBackgroundTwo />
        </div>
    )
}

export default Welcome;
