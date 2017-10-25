import React, { Component } from 'react';
import './index.css';

class IntroSection extends Component {

    render() {
        return (
            <div className="intro-section">

                <div className="quote">
                    "He said to be cool, but I'm already coolest..."
                </div>

                <p>
                    Your site can't get cooler if it's already bomb af, am I right?
                </p>

                <p>
                    So. You need a new website, but you don't know where to start and/or
                    you don't got the time? No worries--I got you. I believe in a simple
                    formula: design + functionality = power. And I'm here to make that
                    process as stress-free as possible.
                </p>

            </div>
        );
    }

}

export default IntroSection;
