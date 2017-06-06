import React from 'react';

import { ConnectedRouter } from 'react-router-redux';

import {history as RouterHistory} from '../../store';

import Routes from '../../Routes';


const App = ({auth, errors, signIn, signOut}) => (
    <ConnectedRouter history={RouterHistory} >
        <Routes
            errors={errors}
            auth={auth}
            signIn={signIn}
            signOut={signOut}
        />
    </ConnectedRouter>
);

export default App;
