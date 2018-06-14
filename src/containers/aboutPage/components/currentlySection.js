import React, { Component } from 'react';

class CurrentlySection extends Component {

    render() {
        return (
            <div className="row">

                <div className="sect">
                    <div className="image"><img src="img/book.png" width="40px" /></div>
                    <div className="descr"><h3>The Hate U Give</h3>
                    Angie Thomas</div>
                </div>

                <div className="sect">
                    <div className="image"><img src="img/tv.png" width="40px"/></div>
                    <div className="descr"><h3>Peaky Blinders</h3>
                    Season 3</div>
                </div>

                <div className="sect">
                    <div className="image"><img src="/img/music.png" width="40px"/></div>
                    <div className="descr"><h3>Crocodile Rock</h3>
                    Elton John</div>
                </div>

            </div>
        );
    }

}

export default CurrentlySection;
