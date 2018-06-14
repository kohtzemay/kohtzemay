import React, { Component }from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import HomePage from '../containers/homePage';
import AboutPage from '../containers/aboutPage';
import PortfolioPage from '../containers/portfolioPage';
// import CreatePage from '../containers/createPage';
import BlogPage from '../containers/blogPage';
import ContactPage from '../containers/contactPage';
import Menu from '../containers/menu';
import './index.css';

class Routes extends Component {
    render() {
        return (
            <div>
                <div className="menu-fixed"><Menu /></div>
                <div className="main">
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/about' component={AboutPage} />
                        <Route exact path='/portfolio' component={PortfolioPage} />
                        {/* <Route exact path='/create' component={CreatePage} /> */}
                        <Route exact path='/blog' component={BlogPage} />
                        <Route exact path='/contact' component={ContactPage} />
                    </Switch>
                </div>
            </div>
        )
    }
}


export default withRouter(connect()(Routes));
