import React, { Component } from 'react';
// import { HashRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import {store, history as RouterHistory} from '../../store';


import './App.css';
import Routes from '../../Routes';

const App = () => (
    <MuiThemeProvider>
        <Provider store={store} >
            <ConnectedRouter history={RouterHistory} >
                <Routes />
            </ConnectedRouter>
        </Provider>
    </MuiThemeProvider>
);


export default App;
