import React from 'react';
import './Testimonials.css';
import WavyBackgroundFive from './WavyBackgroundFive';
import customers from './Happy-Customers.png';

const Testimonials = () => {
    return (
        <div id="testimonial">
            <div className="container testimonial-section text-center">
                <h1 className="testimonial-heading">10,000 Satisfied clients <br /> around the world</h1>
                <div className="heading-line test-line"></div>
                <p className="testimonial-desc fw-semi-bold">
                Yeah! we're proud with numbers. We've helped thousand of clients around the world with our bespoke service. Hover on top their testimonials to view their testimonials.
                </p>
               </div>
               <div className="container">
                   <div className="ovals">
                       <img src={customers} alt="testimonial" className="testimonial-image" />
                   </div>
               </div>
               
            <WavyBackgroundFive />
        </div>
    )
}

export default Testimonials;
