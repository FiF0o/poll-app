/**
 * Created by jonlazarini on 20/05/17.
 */
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import {loginMiddleware} from './middlewares/loginMiddleware';
import {userMiddleware} from './middlewares/userMiddleware';
import {pollsMiddleware} from './middlewares/pollsMiddleware';
import {votesMiddleware} from './middlewares/votesMiddleware';
import reducers from './reducers';

import {initialState} from './initialState';

export const history = createHistory();
const routingMiddleware = routerMiddleware(history);
const middlewares = [ thunk, routingMiddleware, loginMiddleware, userMiddleware, pollsMiddleware, votesMiddleware ];

if(process.env.NODE_ENV !== 'production') {
    const { logger } = require('redux-logger');
    middlewares.push(logger)
}

const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
    reducers,
    initialState,
    composeEnhancers(
        applyMiddleware(...middlewares),
        ...enhancers
    )
);
