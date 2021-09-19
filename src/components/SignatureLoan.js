import React from 'react'
import SignatureImage from './signature-image.png';
import './SignatureLoan.css';
import WavyBackgroundFour from './WavyBackgroundFour';

const SignatureLoan = () => {
    return (
        <div id="signature" className="signature-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="signature-heading">Signature Loan</h1>
                        <h1 className="signature-second-heading">For Life's hiccups, hurdles and hullabaloos</h1>
                        <div className="heading-line"></div>
                        <p className="signature-desc">
                            <ul>
                            <li>Smart way to consolidate high-interest rate balances into one low fixed monthly payments</li>
                            <li>Loans available from .... to ....</li>
                            <li>Interest rates from ... to ....</li>
                            <li>No collateral required</li>
                            <li>Flexible terms available from 12 to 60 months</li>
                            <li>One time disbursement for those special purchases</li>
                            <li>Find out almost instantly if you're approved</li>
                            <li>Visa debit or check by phone accepted</li>
                            </ul>
                        </p>
                        <button type="button" className="signature-btn">Discover</button>
                    </div>
                    <div className="col-md-6">
                        <img src={SignatureImage} className="signature" alt="signature" />
                    </div>
                </div>
            </div>
            <WavyBackgroundFour />
        </div>
    )
}

export default SignatureLoan;
