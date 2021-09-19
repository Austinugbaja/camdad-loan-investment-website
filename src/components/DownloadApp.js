import React from 'react'
import './DownloadApp.css';
import AppleStoreImage from './apple-store-icon.png';
import PlayStoreImage from './google-play-icon.png';
import WavyBackgroundSix from './WavyBackgroundSix';

const DownloadApp = () => {
    return (
        <div id="download">
            <div className="container">
                <div className="download-section text-center">
                    <h1 className="download-heading">Download our App</h1>
                    <div className="heading-line test-line"></div>
                    <p className="download-desc">Discover exclusive deals and discounts with our mobile experience</p>
                    <span><img src={AppleStoreImage} alt="Apple store icon" /></span>
                    <span><img src={PlayStoreImage} alt="Google playstore icon" /></span>
                </div>
            </div>
            <WavyBackgroundSix />
        </div>
    )
}

export default DownloadApp;
