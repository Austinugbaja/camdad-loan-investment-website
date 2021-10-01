import React from 'react';
import AppImage from './appImage.png';
import AppImageTwo from './appImageTwo.png';
import './DownloadAppTwo.css';

const DownloadAppTwo = () => {
    return (
        <div id="app-download">
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 appimage">
                        <div>
                        <img src={AppImage} className='appimage1' alt="an app" />
                        </div>
                        <div>
                        <img src={AppImageTwo} className='appimage1' alt="another app" />
                        </div>
                        
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    )
}

export default DownloadAppTwo;
