import React from 'react';

import { ConnectedRouter } from 'react-router-redux';

import {history as RouterHistory} from '../../store';

import Routes from '../../Routes';

import './App.css';


const App = ({auth, signIn, signOut}) => (
    <ConnectedRouter history={RouterHistory} >
        <Routes />
    </ConnectedRouter>
);

export default App;
