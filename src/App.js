import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Intro from './components/Intro';
import Welcome from './components/Welcome';
import Rates from './components/Rates';
import SignatureLoan from './components/SignatureLoan';
import Testimonials from './components/Testimonials';
import DownloadApp from './components/DownloadApp';
import DownloadAppTwo from './components/DownloadAppTwo';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';



const App = () => {
    return (
        <>
        <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact />
        </Switch>
        </Router>
        <Intro />
        <Welcome />
        <Rates />
        <SignatureLoan />
        <Testimonials />
        <DownloadApp />
        <DownloadAppTwo />
        <Newsletter />
        <Footer />
        </>
    )
}

export default App;