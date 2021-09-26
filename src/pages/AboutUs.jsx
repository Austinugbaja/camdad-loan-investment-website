import React, { Fragment } from 'react'
import AboutUsHeroSection from '../components/AboutUsHeroSection';
import Ceosection from '../components/Ceosection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';




const AboutUsPage = () => {
    return (
        <Fragment>
            <AboutUsHeroSection />
            <Ceosection />
            <Newsletter />
            <Footer />
        </Fragment>
    )
}

export default AboutUsPage;
