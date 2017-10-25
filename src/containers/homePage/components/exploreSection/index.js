import React, { Component } from 'react';
import BlogTile from './components/blogTile';
import PortfolioTile from './components/portfolioTile';
import CreateTile from './components/createTile';
import AboutTile from './components/aboutTile';
import QuoteTile from './components/quoteTile';
import './index.css';

class ExploreSection extends Component {

    render() {
        return (
            <div>
                <h1>Explore</h1>

                <div className="border"></div>

                <div className="tile-row one">
                    <div className="blog-tile">
                        <BlogTile />
                    </div>

                    <div className="portfolio-tile">
                        <PortfolioTile />
                    </div>
                </div>

                <div className="tile-row two">
                    <div className="create-tile">
                        <CreateTile />
                    </div>
                </div>

                <div className="tile-row one">
                    <div className="about-tile">
                        <AboutTile />
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
