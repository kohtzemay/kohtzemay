import React, { Component } from 'react';

class PortfolioTile extends Component {

    render() {
        return (
            <div>

                <div className="heading">
                    <h2 className="explore">Portfolio</h2>
                    <img src="img/portfolio.png" width="30px" height="30px"/>
                </div>

                <p>
                    Check out my work! I sometimes do design work on the side. I believe in creating designs
                    that are both personal and professional: they should engage you as well as your
                    audience.
                </p>

            </div>
        );
    }

}

export default PortfolioTile;
