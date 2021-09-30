import React, { Fragment } from 'react'
import AboutUsHeroSection from '../components/AboutUsHeroSection';
import Ceosection from '../components/Ceosection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';



const AboutUsPage = () => {
    return (
        <Fragment>
            <Navbar />
            <AboutUsHeroSection />
            <Ceosection />
            <Newsletter />
            <Footer />
        </Fragment>
    )
}

export default AboutUsPage;
