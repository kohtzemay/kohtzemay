import React, { Component } from 'react';
import InfoSection from './components/infoSection';
import MainSection from './components/mainSection';
import './index.css';

class AboutPage extends Component {

    render() {
        return (
            <div className="main-content">
                <div className="about-card">
                    <InfoSection />
                    <MainSection />
                </div>
            </div>
        );
    }

}

export default AboutPage;
