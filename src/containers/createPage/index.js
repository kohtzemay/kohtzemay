import React, { Component } from 'react';
import IntroSection from './components/introSection';
import ProcessSection from './components/processSection';
import ServicesSection from './components/servicesSection';

class CreatePage extends Component {

    render() {
        return (
            <div className="main-content">
                <IntroSection />
                <ProcessSection />
                <ServicesSection />
            </div>
        );
    }

}

export default CreatePage;
