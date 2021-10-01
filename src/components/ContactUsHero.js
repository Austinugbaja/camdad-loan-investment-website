import React from 'react';
import contactGroup from '../images/contact-group.png';
import '../styles/ContactUsHero.css';
import ContactWavybg from './ContactWavybg';

const ContactUsHero = () => {
    return (
        <div id="contact-us-hero">
            <div className="container contact-us-section">
                <div className="row">
                    <div className="col-md-6">
                    <h1 className="contact-us-heading">24/7 customer support <br /> including weekends.</h1>
                    <p className="contact-us-description">We're always there to help regardless of the number of queries at hand</p>
                    </div>
                    <div className="col-md-6">
                        <img src={contactGroup} className='contactusimg' alt="contact us" />
                    </div>
                </div>
            </div>
            <ContactWavybg />
        </div>
    )
}

export default ContactUsHero;
