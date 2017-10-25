import React, { Component } from 'react';
import Tile1 from './tile1';
import Tile2 from './tile2';
import Tile3 from './tile3';
import Tile4 from './tile4';
import './index.css';

class ProcessTiles extends Component {

    render() {
        return (
            <div>
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

export default ProcessTiles;
