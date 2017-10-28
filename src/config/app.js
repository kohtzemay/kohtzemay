import React, { Component } from 'react';
import Menu from '../containers/menu';
import Routes from './routes';
import './index.css';

class App extends Component {

    render() {
        return (
            <div>
                <div className="menu-fixed"><Menu /></div>
                <div className="main"><Routes /></div>
            </div>
        );
    }
}

export default App;
