import React, { Component } from 'react';

class PortfolioPage extends Component {

    render() {
        return (
            <div className="main-content">

                <div className="portfolio-width">

                    <div className="portfolio-display">
                        <div className="portfolio-card">
                            <h2>Emmanuel Evangelical Free Church</h2>
                            <a href="http://emmanuel-efc.org" target="_blank"><img src="img/eefc.jpg" /></a>
                            <p>Design, development, WordPress setup, administration</p>
                        </div>

                        <div className="portfolio-card">
                            <h2>Hawwa, Etc.</h2>
                            <a href="http://www.hawwaetc.com/" target="_blank"><img src="img/hawwa-etc.jpg" /></a>
                            <p>Design, development, Blogger installation</p>
                        </div>
                    </div>

                    <div className="portfolio-display">
                        <div className="portfolio-card">
                            <h2>Adrift on Vulcan</h2>
                            <img src="img/adrift-on-vulcan.jpg" />
                            <p>Design, development, WordPress setup, administration* <br />
                            <i>*Site shut down</i></p>
                        </div>

                        <div className="portfolio-card">
                            <h2>The Art of Escapism</h2>
                            <img src="img/art-of-escapism.jpg" />
                            <p>Design, development, WordPress setup* <br />
                            <i>*Site shut down</i></p>
                        </div>
                    </div>

                </div>

            </div>
        );
    }

}

export default PortfolioPage;
