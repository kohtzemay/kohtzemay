import React, { Component } from 'react';

class InfoSection extends Component {

    render() {
        return (
            <div>

                <div className="info-section">
                    <div className="about-pic"><img src="img/derp.jpg" width="200px" height="200px" /></div>
                    <div className="about-info">
                        <h1 className="megan">Megan</h1>
                        <p style={{margin: '0'}}><img src="img/location.png" width="25px" height="25px" />Grand Rapids, MI</p>
                    </div>
                </div>

            </div>
        );
    }

}

export default InfoSection;
