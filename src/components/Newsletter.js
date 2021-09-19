import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <div id="newsletter">
            <div className="container text-center">
                <h1 className="newsletter-heading">Subscribe to our Newsletter</h1>
                <div className="heading-line test-line"></div>
                <div className="newsletter-desc">
                <p>
                Subscribe to our newsletter for daily/weekly update of our products and services
                </p>
                </div>
                <form className="row g-2 input-column">
                <div className="newsletter-form col-auto">
                    <input type="text" className="form-control" placeholder="Email" />
                </div>
                <div className="newsletter-btn col-auto">
                   <button type="submit" className="newsletter-btn">Discover</button>
                </div>
                </form>
               
            </div>
        </div>
    )
}

export default Newsletter
