import React, { Component } from 'react';
import MenuPanel from './components/menuPanel';

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            menuOpen: false,
            currentPage: 'Home'
        }

        this.toggleMenu = this.toggleMenu.bind(this);
        this.handlePage = this.handlePage.bind(this);
    }

    toggleMenu() {
        this.setState({ menuOpen: !this.state.menuOpen })
    }

    handlePage(currentPage) {
        this.setState({ currentPage: currentPage })
    }

    render() {
        var page = this.state.currentPage

        return (
            <div>
                <div className="menu-bar">
                    <div className="site-title"><a href="/">KOHTZEMAY</a></div>
                    <div className="menu-lines"><span onClick={this.toggleMenu}>&#9776;</span></div>
                </div>

                <div className="menu-panel">
                    <MenuPanel menuOpen={this.state.menuOpen} handlePage={this.handlePage} />
                </div>
            </div>
        );
    }

}

export default Menu;
