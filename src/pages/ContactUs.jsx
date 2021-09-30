import React, { Fragment } from 'react'
import ContactUsForm from '../components/ContactUsForm';
import ContactUsHero from '../components/ContactUsHero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ContactUsPage = () => {
    return (
        <Fragment>
            <Navbar />
            <ContactUsHero />
            <ContactUsForm />
            <Footer />
        </Fragment>
    )
}

export default ContactUsPage;
