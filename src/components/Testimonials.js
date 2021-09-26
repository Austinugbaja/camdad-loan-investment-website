import React from 'react';
import './Testimonials.css';
import WavyBackgroundFive from './WavyBackgroundFive';
import firstTest from "../images/Oval.png";
import secondTest from "../images/OvalCopy-7.png";
import thirdTest from "../images/OvalCopy-14.png";
import fourthTest from "../images/OvalCopy-6.png";
import fifthTest from "../images/OvalCopy-3.png";
import sixthTest from "../images/OvalCopy-12.png";
import seventhTest from "../images/OvalCopy-4.png";
import eightTest from "../images/OvalCopy-5.png";
import ninthTest from "../images/OvalCopy-10.png";
import tenthTest from "../images/OvalCopy-15.png";
import eleventhTest from "../images/OvalCopy-13.png";
import twelvethTest from "../images/OvalCopy-9.png";
import thirteenthTest from "../images/OvalCopy-11.png";

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
               <div className="row">
                   <div className="col-md-4">
                       <img src={firstTest} className="testimonial-img" alt="first testimonial" />
                       <img src={secondTest} className="testimonial-img-one" alt="second testimonial" />
                       <img src={thirdTest} className="testimonial-img-two" alt="third testimonial" />
                       <img src={fourthTest} className="testimonial-img-three" alt="fourth testimonial" />
                   </div>
                   <div className="col-md-4">
                   <img src={fifthTest} className="testimonial-img-four" alt="fifth testimonial" />
                   <img src={sixthTest} className="testimonial-img-five" alt="sixth testimonial" />
                   <img src={seventhTest} className="testimonial-img-six" alt="seventh testimonial" />
                   <img src={eightTest} className="testimonial-img-seven" alt="eight testimonial" />
                   </div>
                   <div className="col-md-4">
                   <img src={tenthTest} className="testimonial-img-nine" alt="tenth testimonial" />
                   <img src={eleventhTest} className="testimonial-img-ten" alt="eleventh testimonial" />
                   <img src={ninthTest} className="testimonial-img-eight" alt="ninth testimonial" />
                   <img src={thirteenthTest} className="testimonial-img-twelve" alt="thirteenth testimonial" />
                   <img src={twelvethTest} className="testimonial-img-eleven" alt="twelveth testimonial" />
                   </div>
               </div>
               </div>
               
            <WavyBackgroundFive />
        </div>
    )
}

export default Testimonials;
