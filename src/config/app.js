import React, { Component } from 'react';
import Menu from '../containers/menu';
import Routes from './routes';

class App extends Component {

    render() {
        return (
            <div>
                <Menu />
                <div className="main"><Routes /></div>
            </div>
        );
    }
}

export default App;
