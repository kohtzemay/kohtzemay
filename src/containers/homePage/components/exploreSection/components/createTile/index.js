import React, { Component } from 'react';
import './index.css';

class CreateTile extends Component {

    render() {
        return (
            <div style={{display: 'flex', width: '100%'}}>

                <div className="heading create">
                    <h2 className="explore">Create</h2>
                    <img src="img/create.png" width="30px" height="30px"/>
                </div>

                <p className="create">Interested in working with me but need more information? I got you covered, fam.
                    Read about what I can do here. And if nothing here answers your questions, you can always contact me.</p>

            </div>
        );
    }

}

export default CreateTile;
