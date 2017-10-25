import React, { Component } from 'react';
import TitleCard from './components/titleCard';
import './index.css';

class WelcomeSection extends Component {

    render() {
        return (
            <div className="stars" style={{backgroundImage: 'url(img/stars.png)'}}>
                <TitleCard scrollTo={this.props.scrollTo} />
            </div>
        );
    }

}

export default WelcomeSection;
