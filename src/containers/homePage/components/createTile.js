import React, { Component } from 'react';

class CreateTile extends Component {

    render() {
        return (
            <div style={{display: 'flex', width: '100%'}}>

                <div className="heading create">
                    <h2 className="explore">Resume</h2>
                    <img src="img/resume.png" width="30px" height="30px"/>
                </div>

                <p className="create">
                    Want to get a better idea of my experiences and capabilities? Take a peek at my
                    resume here!
                </p>

            </div>
        );
    }

}

export default CreateTile;
