import React from 'react';
import AppImage from './appImage.png';
import AppImageTwo from './appImageTwo.png';
import './DownloadAppTwo.css';

const DownloadAppTwo = () => {
    return (
        <div id="app-download">
            <div className="container">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                        <img src={AppImage} alt="an app" />
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <img src={AppImageTwo} alt="another app" />
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </div>
    )
}

export default DownloadAppTwo;
