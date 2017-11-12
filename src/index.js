import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Provider } from 'react-redux';

import {store} from './store';
import ApplicationContainer from './containers/ApplicationContainer';
import './index.css';
// import intializers from './initializers'
import { listeningToAuthChanges, listeningToPolls, listeningForUsers, listeningToVotes } from './utils/listeners/';
import registerServiceWorker from './registerServiceWorker';
injectTapEventPlugin();

// intializers.forEach(intializer => intializer(store));


store.dispatch(listeningToAuthChanges());
store.dispatch(listeningToPolls());
store.dispatch(listeningForUsers());
store.dispatch(listeningToVotes());

const parentComponent =
    <MuiThemeProvider>
        <Provider store={store} >
            {/* contains Router, Routes */}
            <ApplicationContainer />
        </Provider>
    </MuiThemeProvider>;

const root = document.getElementById('root');

ReactDOM.render(
    parentComponent,
    root
);
registerServiceWorker();