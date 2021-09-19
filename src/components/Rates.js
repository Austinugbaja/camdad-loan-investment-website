import React from 'react';
import './Rates.css';
import WavyBackgroundThree from './WavyBackgroundThree';

const Rates = () => {
    return (
        <div>
            <div id="rates" className="rates-section">
            <div className="container">
                <div className="rates-column">
                    <h1 className="display-6 fw-bold rates-heading">Our Rates</h1>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
        <WavyBackgroundThree />
        </div> 
    )
}


export default Rates;
