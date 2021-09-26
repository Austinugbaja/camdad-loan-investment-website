import React, { Fragment } from 'react'
import ContactUsForm from '../components/ContactUsForm';
import ContactUsHero from '../components/ContactUsHero';
import Footer from '../components/Footer';

const ContactUsPage = () => {
    return (
        <Fragment>
            <ContactUsHero />
            <ContactUsForm />
            <Footer />
        </Fragment>
    )
}

export default ContactUsPage;
