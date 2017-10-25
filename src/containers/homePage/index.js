import React, { Component } from 'react';
import Scroll, { Element, Link, Events } from 'react-scroll';
import WelcomeSection from './components/welcomeSection';
import ExploreSection from './components/exploreSection';
import './index.css'

class HomePage extends Component {
    constructor() {
        super();
        this.scrollTo = this.scrollTo.bind(this)
    }

    scrollTo() {
        Scroll.scroller.scrollTo('exploreSection', {
            duration: 1000,
            delay: 100,
            smooth: true,
            offset: 0
        })
    }

    render() {

        return (
            <div className="content">

                <WelcomeSection scrollTo={this.scrollTo} />

                <br />

                <Element name="exploreSection">
                    <div className="section explore">
                        <ExploreSection />
                    </div>
                </Element>

            </div>
        )
    }
}

export default HomePage;
