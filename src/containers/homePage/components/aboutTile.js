import React, { Component } from 'react';

class AboutTile extends Component {

    render() {
        return (
            <div>
                <div className="heading">
                    <h2 className="explore">About</h2>
                    <img src="img/about.png" width="30px" height="30px"/>
                </div>

                <p>
                    So… who is this chick? What does <b>kohtzemay</b> even mean? You can find out here;
                    hang loose while I ramble all about myself.
                </p>
            </div>
        );
    }

}

export default AboutTile;
