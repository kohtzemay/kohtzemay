import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Routes from './config/routes.js';
import { ConnectedRouter } from 'connected-react-router';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

let store = createStore(
    connectRouter(history),
    compose(
        applyMiddleware(
            routerMiddleware(history)
        ),
    ),
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
