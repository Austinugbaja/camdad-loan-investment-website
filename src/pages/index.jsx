import React, { Fragment } from 'react'
import DownloadApp from '../components/DownloadApp';
import DownloadAppTwo from '../components/DownloadAppTwo';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Rates from '../components/Rates';
import SignatureLoan from '../components/SignatureLoan';
import Testimonials from '../components/Testimonials';
import Welcome from '../components/Welcome';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar />
            <Intro />
            <Welcome />
            <Rates />
            <SignatureLoan />
            <Testimonials />
            <DownloadApp />
            <DownloadAppTwo />
            <Newsletter />
            <Footer />
        </Fragment>
    )
}

export default HomePage;
