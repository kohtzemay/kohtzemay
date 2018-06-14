import React, { Component } from 'react';
import BlogTile from './blogTile';
import PortfolioTile from './portfolioTile';
import CreateTile from './createTile';
import AboutTile from './aboutTile';
import QuoteTile from './quoteTile';

class ExploreSection extends Component {

    render() {
        return (
            <div>
                <h1>Explore</h1>

                <div className="border"></div>

                <div className="tile-row one">
                    <div className="blog-tile">
                        <a href="http://kohtzemay.wordpress.com"><BlogTile /></a>
                    </div>

                    <div className="portfolio-tile">
                        <a href="/portfolio"><PortfolioTile /></a>
                    </div>
                </div>

                <div className="tile-row two">
                    <div className="create-tile">
                        <a href="https://kohtzemay.files.wordpress.com/2018/06/resume.pdf" target="_blank"><CreateTile /></a>
                    </div>
                </div>

                <div className="tile-row one">
                    <div className="about-tile">
                        <a href="/about"><AboutTile /></a>
                    </div>

                    <div className="quote-tile">
                        <QuoteTile />
                    </div>
                </div>

            </div>
        );
    }

}

export default ExploreSection;
