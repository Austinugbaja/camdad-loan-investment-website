import React from 'react';
import '../styles/ContactUsForm.css';

const ContactUsForm = () => {
    return (
        <div>
            <div className="container text-center form-container">
                <h1 className="form-heading">Please note that all messages will be replied within the next 12 hours</h1>
                <form action="">
                    <div className="row contact-us-input">
                        <div className="col-md-6 contact-name">
                            <input type="text" className="form-control input-name" placeholder="Name" />
                        </div>
                        <div className="col-md-6 contact-email">
                            <input type="email" className="form-control input-email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="contact-textarea">
                        <textarea className="form-control" cols="30" rows="10" placeholder="Your comment"></textarea>
                    </div>
                    <div className="text-start">
                   <button type="submit" className="form-btn">Submit</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUsForm;
