import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuPanel extends Component {

    render() {
        var menuClass = this.props.menuOpen ? 'menu open' : 'menu'

        return (
            <div className={menuClass}>

                <ul className="menu-list">
                    <li><a href='/'>Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/portfolio'>Portfolio</a></li>
                    <li><a href='http://kohtzemay.wordpress.com'>Blog</a></li>
                    <li><a href='https://kohtzemay.files.wordpress.com/2018/06/resume.pdf' target="_blank">Resume</a></li>
                    <li><a href='/contact'>Contact</a></li>
                </ul>

            </div>
        );
    }

}

export default MenuPanel;
