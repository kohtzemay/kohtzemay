import React, { Component } from 'react';
import './index.css';

class PortfolioPage extends Component {

    render() {
        return (
            <div className="main-content">

                <div className="portfolio-width">

                    <div className="portfolio-display">
                        <div className="portfolio-card">
                            <h2>Emmanuel Evangelical Free Church</h2>
                            <img src="img/eefc.jpg" />
                            <p>Design, development, WordPress setup, administration</p>
                        </div>

                        <div className="portfolio-card">
                            <h2>Hawwa, Etc.</h2>
                            <img src="img/hawwa-etc.jpg" />
                            <p>Design, development, Blogger installation</p>
                        </div>
                    </div>

                    <div className="portfolio-display">
                        <div className="portfolio-card">
                            <h2>Adrift on Vulcan</h2>
                            <img src="img/adrift-on-vulcan.jpg" />
                            <p>Design, development, WordPress setup, administration</p>
                        </div>

                        <div className="portfolio-card">
                            <h2>The Art of Escapism</h2>
                            <img src="img/art-of-escapism.jpg" />
                            <p>Design, development, WordPress setup</p>
                        </div>
                    </div>

                </div>

            </div>
        );
    }

}

export default PortfolioPage;
