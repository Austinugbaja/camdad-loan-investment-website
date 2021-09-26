import React from 'react';
import Quality from '../images/Quality.png';
import medal from '../images/medal.png';
import customerReview from '../images/customer-review.png';
import support from '../images/support.png';
import aboutCamdad from '../images/about-camdad.png';
import '../styles/Ceosection.css';

const Ceosection = () => {
    return (
        <div>
            <div className="container">
                <div className="first-quote-section text-center">
                <h1 className="quote">At Camdad Investment Limited we endeavour to making sure that we provide you with a solution to your financial worries</h1>
                <div className="heading-line quote-line"></div>
                <p className="quote-ceo">CEO Camdad</p>
                </div>
                <div className="second-quote-section text-center">
                    <div className="about-camdad-boundary">
                    <img src={aboutCamdad} alt="about camdad" />
                    <h1 className="second-quote-heading">about camdad</h1>
                    <div className="heading-line second-quote-line"></div>
                    <p className="second-quote-desc">Camdad is an online platform managed and owned by Camdad Investment Nigeria Limited, established and incorporated in Nigeria.</p>
                    <div className="about-icons">
                    <span><img src={Quality} className="about-icon-logo" alt="quality icon" /></span>
                    <span><img src={medal} className="about-icon-logo" alt="medal icon" /></span>
                    <span><img src={customerReview} className="about-icon-logo" alt="customer review icon" /></span>
                    <span><img src={support} className="about-icon-logo" alt="support icon" /></span>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Ceosection;
