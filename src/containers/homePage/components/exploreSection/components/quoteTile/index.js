import React, { Component } from 'react';
import './index.css';

class QuoteTile extends Component {

    render() {
        return (
            <div>
                <p>
                    "Let us step into the night and pursue that flighty temptress, adventure."
                </p>

                <p className="quotee">— Albus Dumbledore</p>
            </div>
        );
    }

}

export default QuoteTile;
