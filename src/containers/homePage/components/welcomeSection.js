import React, { Component } from 'react';

class WelcomeSection extends Component {

    render() {
        return (
            <div className="stars" style={{backgroundImage: 'url(img/stars.png)'}}>
                <div className="title-card">
                    <img src="img/2-cloud.png" id="left-cloud" width="200px" />
                    <img src="img/2-cloud.png" id="right-cloud" width="130px" />

                    <h1 className="hi">Hello.</h1>

                    <img src="img/1-cloud.png" id="middle-cloud" width="70px" />

                    <p>
                        Welcome to <span style={{fontWeight: 'bold', color: 'rgb(106, 118, 253)'}}>kohtzemay
                        </span> — a personal portfolio and home to the self-proclaimed nerd and fangirl <b>
                        Megan</b>.<br /> Take a look around, but don't get too caught up in my post-teenage
                        angst. ;)
                    </p>

                    <button className="btn btn-primary" onClick={this.props.scrollTo}>Explore</button>
                </div>
            </div>
        );
    }

}

export default WelcomeSection;
