import React, { Component } from 'react';
import ProcessTiles from './components/processTiles';

class ProcessSection extends Component {

    render() {
        return (
            <div className="section process">
                <h1>Process</h1>

                <div className="border"></div>

                <ProcessTiles />
            </div>
        );
    }

}

export default ProcessSection;
