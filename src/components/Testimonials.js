import React from 'react';
import './Testimonials.css';
import TestimonialImage from './Happy-Customers.png';
import WavyBackgroundFive from './WavyBackgroundFive';

const Testimonials = () => {
    return (
        <div id="testimonial">
            <div className="container testimonial-section text-center">
                <h1 className="testimonial-heading">10,000 Satisfied clients <br /> around the world</h1>
                <div className="heading-line test-line"></div>
                <p className="testimonial-desc fw-semi-bold">
                Yeah! we're proud with numbers. We've helped thousand of clients around the world with our bespoke service. Hover on top their testimonials to view their testimonials.
                </p>
                <img src={TestimonialImage} alt="testimonials by customers" />
            </div>
            <WavyBackgroundFive />
        </div>
    )
}

export default Testimonials;
