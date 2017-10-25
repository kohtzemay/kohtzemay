import React, { Component }from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../containers/homePage';
import AboutPage from '../containers/aboutPage';
import PortfolioPage from '../containers/portfolioPage';
import CreatePage from '../containers/createPage';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/portfolio' component={PortfolioPage} />
                <Route path='/create' component={CreatePage} />
            </Switch>
        )
    }

}

export default Routes;
