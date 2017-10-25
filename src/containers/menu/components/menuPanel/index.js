import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './index.css';

class MenuPanel extends Component {

    render() {
        var menuClass = this.props.menuOpen ? 'menu open' : 'menu'

        return (
            <div className={menuClass}>

                <ul className="menu-list">
                    <li onClick={() => {this.props.handlePage('Home')}}><Link to='/'>Home</Link></li>
                    <li onClick={() => {this.props.handlePage('About')}}><Link to='/about'>About</Link></li>
                    <li onClick={() => {this.props.handlePage('Portfolio')}}><Link to='/portfolio'>Portfolio</Link></li>
                    <li onClick={() => {this.props.handlePage('Create')}}><Link to='/create'>Create</Link></li>
                    <li onClick={() => {this.props.handlePage('Blog')}}><Link to='/blog'>Blog</Link></li>
                    <li onClick={() => {this.props.handlePage('Contact')}}><Link to='/contact'>Contact</Link></li>
                </ul>

            </div>
        );
    }

}

export default MenuPanel;
