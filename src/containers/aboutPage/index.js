import React, { Component } from 'react';
import InfoSection from './components/infoSection.js';
import MainSection from './components/mainSection.js';
import CurrentlySection from './components/currentlySection.js';

class AboutPage extends Component {

    render() {
        return (
            <div className="main-content">
                <div className="about-card">
                    <InfoSection />
                    <CurrentlySection />
                    <MainSection />
                </div>
            </div>
        );
    }

}

export default AboutPage;
