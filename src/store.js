/**
 * Created by jonlazarini on 20/05/17.
 */
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux'

import reducers from './reducers';

import {initialState} from './initialState';

// import { myMiddleware } from './middlewares/myMiddleware';
export const history = createHistory();
const routingMiddleware = routerMiddleware(history);

const middleware = [ thunk, createLogger(), routingMiddleware ];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
    reducers,
    initialState,
    composeEnhancers(
        applyMiddleware(...middleware),
        ...enhancers
    )
);
