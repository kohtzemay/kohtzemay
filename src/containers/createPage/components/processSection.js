import React, { Component } from 'react';
import Tile1 from './tile1.js';
import Tile2 from './tile2.js';
import Tile3 from './tile3.js';
import Tile4 from './tile4.js';

class ProcessSection extends Component {

    render() {
        return (
            <div className="section process">
                <h1>Process</h1>

                <div className="border"></div>

                <div className="tiles">
                    <Tile1 />
                    <Tile2 />
                </div>

                <div className="tiles">
                    <Tile3 />
                    <Tile4 />
                </div>
            </div>
        );
    }

}

export default ProcessSection;
